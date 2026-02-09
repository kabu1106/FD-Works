import { EventBase } from "../shared/base"

export type WorkStarted = EventBase<
  "WorkStarted",
  {
    dutyId: string
    staffId: number
    at: string // ISO DateTime
  }
>

export type BreakStarted = EventBase<
  "BreakStarted",
  {
    dutyId: string
    staffId: number
    at: string
  }
>

export type BreakEnded = EventBase<
  "BreakEnded",
  {
    dutyId: string
    staffId: number
    at: string
  }
>

export type WorkEnded = EventBase<
  "WorkEnded",
  {
    dutyId: string
    staffId: number
    at: string
  }
>
