/**
 * 勤務表リポジトリ
 * データベースアクセスを隠蔽し、ドメインモデルとの変換を行う
 */

import { prisma } from '../prisma'
import { ScheduleDayDomain, SpecialLeaveDomain } from '@/lib/schedule/types'
import { SleepGroup } from '@/types'

/**
 * 勤務表の1日を取得
 * @param date 日付（YYYY-MM-DD形式）
 * @returns 勤務表の1日のドメインモデル、存在しない場合はnull
 */
export async function getScheduleDay(date: string): Promise<ScheduleDayDomain | null> {
  const scheduleDay = await prisma.scheduleDay.findUnique({
    where: { date: new Date(date) },
    include: {
      sleepGroupAssignments: {
        include: {
          employee: true,
        },
      },
      specialLeaves: {
        include: {
          employee: true,
        },
      },
    },
  })

  if (!scheduleDay) {
    return null
  }

  return toDomainModel(scheduleDay)
}

/**
 * 勤務表の1日を保存または更新
 * @param scheduleDay 勤務表の1日のドメインモデル
 */
export async function saveScheduleDay(scheduleDay: ScheduleDayDomain): Promise<void> {
  const date = new Date(scheduleDay.date)

  // トランザクション内で実行
  await prisma.$transaction(async (tx) => {
    // ScheduleDayをupsert
    const savedScheduleDay = await tx.scheduleDay.upsert({
      where: { date },
      create: {
        date,
        status: scheduleDay.status,
        hasEverCancelled: scheduleDay.hasEverCancelled,
      },
      update: {
        status: scheduleDay.status,
        hasEverCancelled: scheduleDay.hasEverCancelled,
      },
    })

    // 既存のSleepGroupAssignmentを削除
    await tx.sleepGroupAssignment.deleteMany({
      where: { scheduleDayId: savedScheduleDay.id },
    })

    // 新しいSleepGroupAssignmentを作成
    const assignments = []
    for (const [sleepGroup, employeeIds] of Object.entries(scheduleDay.sleepGroups)) {
      for (const employeeId of employeeIds) {
        assignments.push({
          scheduleDayId: savedScheduleDay.id,
          employeeId,
          sleepGroup: sleepGroup as SleepGroup,
        })
      }
    }
    if (assignments.length > 0) {
      await tx.sleepGroupAssignment.createMany({
        data: assignments,
      })
    }

    // 既存のSpecialLeaveを削除
    await tx.specialLeave.deleteMany({
      where: { scheduleDayId: savedScheduleDay.id },
    })

    // 新しいSpecialLeaveを作成
    const specialLeaves = scheduleDay.specialLeaves.map((leave) => ({
      scheduleDayId: savedScheduleDay.id,
      employeeId: leave.employeeId,
      type: leave.type,
      baseDate: new Date(leave.baseDate),
      startDate: new Date(leave.startDate),
      startTime: leave.startTime,
      startMinutes: leave.startMinutes,
      endDate: new Date(leave.endDate),
      endTime: leave.endTime,
      endMinutes: leave.endMinutes,
    }))
    if (specialLeaves.length > 0) {
      await tx.specialLeave.createMany({
        data: specialLeaves,
      })
    }
  })
}

/**
 * 勤務表の状態を更新
 * @param date 日付（YYYY-MM-DD形式）
 * @param status 新しい状態
 * @param hasEverCancelled 一度でも確定が取り消されたことがあるかどうか
 */
export async function updateScheduleStatus(
  date: string,
  status: string,
  hasEverCancelled?: boolean
): Promise<void> {
  const dateObj = new Date(date)
  
  // まず存在確認
  const existing = await prisma.scheduleDay.findUnique({
    where: { date: dateObj },
  })
  
  if (!existing) {
    // 存在しない場合は作成
    await prisma.scheduleDay.create({
      data: {
        date: dateObj,
        status,
        hasEverCancelled: hasEverCancelled ?? false,
      },
    })
  } else {
    // 存在する場合は更新
    await prisma.scheduleDay.update({
      where: { date: dateObj },
      data: {
        status,
        ...(hasEverCancelled !== undefined && { hasEverCancelled }),
      },
    })
  }
}

/**
 * Prismaモデルをドメインモデルに変換
 */
function toDomainModel(scheduleDay: any): ScheduleDayDomain {
  const sleepGroups: { [key in SleepGroup]: string[] } = {
    group1: [],
    group2: [],
    group3: [],
    group4: [],
    weekend: [],
  }

  for (const assignment of scheduleDay.sleepGroupAssignments || []) {
    const sleepGroup = assignment.sleepGroup as SleepGroup
    if (sleepGroups[sleepGroup]) {
      sleepGroups[sleepGroup].push(assignment.employeeId)
    }
  }

  const specialLeaves: SpecialLeaveDomain[] = (scheduleDay.specialLeaves || []).map((leave: any) => ({
    id: leave.id,
    employeeId: leave.employeeId,
    type: leave.type,
    baseDate: formatDate(leave.baseDate),
    startDate: formatDate(leave.startDate),
    startTime: leave.startTime,
    startMinutes: leave.startMinutes,
    endDate: formatDate(leave.endDate),
    endTime: leave.endTime,
    endMinutes: leave.endMinutes,
  }))

  return {
    id: scheduleDay.id,
    date: formatDate(scheduleDay.date),
    status: scheduleDay.status,
    hasEverCancelled: scheduleDay.hasEverCancelled || false,
    sleepGroups,
    specialLeaves,
  }
}

/**
 * Dateオブジェクトを日付文字列（YYYY-MM-DD）に変換
 */
function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
