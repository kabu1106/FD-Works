export type EventBase<T extends string, P> = {
    eventType: T
    payload: P
  }
  