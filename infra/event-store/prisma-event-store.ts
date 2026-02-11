// infra/event-store/in-memory-event-store.ts
import { EventStore } from '@/infra/event-store/eventStore'
import { EventEnvelope } from '@/domain/shared/event-envelope'
import { OptimisticLockError } from '@/domain/errors/OptimisticLockError'
import { PrismaClient } from '@prisma/client'

export class PrismaEventStore<
  E extends { type: string }
> implements EventStore<E> {

  private prisma = new PrismaClient()

  async append(
    aggregateId: string,
    aggregateType: 'ScheduleDay',
    expectedVersion: number,
    events: Omit<
      EventEnvelope<E>,
      'aggregateId' | 'aggregateType' | 'aggregateVersion'
    >[]
  ): Promise<EventEnvelope<E>[]> {

    // ① 現在の最新 version を取得
    const last = await this.prisma.eventStore.findFirst({
      where: { aggregateId },
      orderBy: { aggregateVersion: 'desc' },
    })

    const actualVersion = last?.aggregateVersion ?? 0

    // ② 楽観ロック判定
    if (actualVersion !== expectedVersion) {
      throw new OptimisticLockError(
        aggregateId,
        expectedVersion,
        actualVersion
      )
    }

    // ③ version 採番
    let nextVersion = actualVersion

    const envelopes: EventEnvelope<E>[] = events.map(e => {
      nextVersion += 1

      return {
        ...e,
        aggregateId,
        aggregateType,
        aggregateVersion: nextVersion,
      }
    })

    // ④ append-only 永続化
    await this.prisma.eventStore.createMany({
      data: envelopes.map(e => ({
        id: e.eventId,
        aggregateId: e.aggregateId,
        aggregateType: e.aggregateType,
        aggregateVersion: e.aggregateVersion,
        eventType: e.eventType,
        payload: e.payload,
        occurredAt: new Date(e.occurredAt),
        causedBy: e.causedBy,
        schemaVersion: e.schemaVersion,
      })),
    })

    return envelopes
  }

  async load(
    aggregateId: string
  ): Promise<EventEnvelope<E>[]> {
    const rows = await this.prisma.eventStore.findMany({
      where: { aggregateId },
      orderBy: { aggregateVersion: 'asc' },
    })

    return rows.map(row => ({
      eventId: row.id,
      aggregateId: row.aggregateId,
      aggregateType: row.aggregateType as 'ScheduleDay',
      aggregateVersion: row.aggregateVersion,
      eventType: row.eventType as E['type'],
      payload: row.payload as E,
      occurredAt: row.occurredAt.toISOString(),
      causedBy: row.causedBy,
      schemaVersion: row.schemaVersion,
    }))
  }
}

