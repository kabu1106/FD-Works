export class OptimisticLockError extends Error {
    constructor(
      public aggregateId: string,
      public expectedVersion: number,
      public actualVersion: number
    ) {
      super(
        `OptimisticLockError: aggregate ${aggregateId} expected v${expectedVersion}, but actual v${actualVersion}`
      )
    }
  }
  