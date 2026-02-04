// infra/event-store/in-memory-event-store.ts
import { EventStore } from '@/infra/event-store/event-store' // パスは適宜調整してください
import { EventEnvelope } from '@/domain/events/event-envelope'
import { OptimisticLockError } from '@/domain/errors/OptimisticLockError'

export class InMemoryEventStore<
  E extends { type: string }
> implements EventStore<E> {

  private events: EventEnvelope<E>[] = []

  async append(
    aggregateId: string,
    aggregateType: string,
    expectedVersion: number,
    events: Omit<
      EventEnvelope<E>,
      'aggregateId' | 'aggregateType' | 'aggregateVersion'
    >[]
  ): Promise<EventEnvelope<E>[]> {

    // ① 現在の最新バージョンを確認（楽観ロック）
    const currentEvents = this.events.filter(e => e.aggregateId === aggregateId)
    const actualVersion = currentEvents.length > 0 
      ? Math.max(...currentEvents.map(e => e.aggregateVersion))
      : 0

    if (actualVersion !== expectedVersion) {
      throw new OptimisticLockError(aggregateId, expectedVersion, actualVersion)
    }

    // ② 不足している情報を補完して Envelope（封筒）を作成
    let nextVersion = actualVersion
    const newEnvelopes: EventEnvelope<E>[] = events.map(e => {
      nextVersion += 1
      return {
        ...e,
        aggregateId,
        aggregateType,
        aggregateVersion: nextVersion,
      } as EventEnvelope<E>
    })

    // ③ メモリに保存
    this.events.push(...newEnvelopes)

    return newEnvelopes
  }

  async load(aggregateId: string): Promise<EventEnvelope<E>[]> {
    return this.events
      .filter(e => e.aggregateId === aggregateId)
      .sort((a, b) => a.aggregateVersion - b.aggregateVersion) // バージョン順に並び替え
  }
}