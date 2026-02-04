import { describe, it, expect } from 'vitest'
import { InMemoryEventStore } from '@/infra/event-store/in-memory-event-store'
import { ScheduleEvent } from '@/domain/events/schedule-events'
import { OptimisticLockError } from '@/domain/errors/OptimisticLockError'

describe('EventStore optimistic lock', () => {
  it('古い version で append すると失敗する', async () => {
    const store = new InMemoryEventStore<ScheduleEvent>()

    const baseEvent = {
      eventId: 'e1',
      eventType: 'STAFF_ASSIGNED' as const,
      payload: {
        type: 'STAFF_ASSIGNED',
        date: '2026-02-01',
        staffId: 10,
        to: { teamId: 1, workGroupId: 101 },
      },
      occurredAt: new Date().toISOString(),
      causedBy: 'cmd-1',
      schemaVersion: 1,
    } as const

    // v0 → v1（成功）
    await store.append(
      '2026-02-01',
      'ScheduleDay',
      0,
      [baseEvent]
    )

    // v0 前提で再度 append（❌ 競合）
    await expect(
      store.append(
        '2026-02-01',
        'ScheduleDay',
        0,
        [baseEvent]
      )
    ).rejects.toBeInstanceOf(OptimisticLockError)
  })
})
