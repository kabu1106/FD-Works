import { PrismaClient, LocationType } from '@prisma/client'

const prisma = new PrismaClient()

type LocationRow = {
  municipality: string
  town?: string
  oaza?: string
  aza?: string
  latitude?: number
  longitude?: number
}

export async function upsertLocationTree(row: LocationRow) {
  if (!row.municipality?.trim()) {
    throw new Error(`municipality is required: ${JSON.stringify(row)}`)
  }

  // -----------------------
  // 市町村（ルート）
  // -----------------------
  const municipality =
    (await prisma.location.findFirst({
      where: {
        parentId: null,
        type: LocationType.MUNICIPALITY,
        name: row.municipality.trim(),
      },
    })) ??
    (await prisma.location.create({
      data: {
        name: row.municipality.trim(),
        type: LocationType.MUNICIPALITY,
      },
    }))

  let parentLocation = municipality

  const levels: {
    key: 'town' | 'oaza' | 'aza'
    type: LocationType
  }[] = [
    { key: 'town', type: LocationType.TOWN },
    { key: 'oaza', type: LocationType.OAZA },
    { key: 'aza', type: LocationType.AZA },
  ]

  // CSV上で「最後に値が入っている階層」を判定
  const lastKey = [...levels]
    .reverse()
    .find(l => row[l.key]?.trim())?.key

  for (const { key, type } of levels) {
    const name = row[key]?.trim()
    if (!name) {
      continue
    }

    const isLastLevel = key === lastKey

    parentLocation = await prisma.location.upsert({
      where: {
        parentId_name: {
          parentId: parentLocation.id,
          name,
        },
      },
      update: {},
      create: {
        name,
        type,
        parentId: parentLocation.id,
        latitude: isLastLevel ? row.latitude ?? null : null,
        longitude: isLastLevel ? row.longitude ?? null : null,
      },
    })
  }
}
