import { EventBase } from "../shared/base"

export type HolidayRegistered = EventBase<
  "HolidayRegistered",
  {
    date: string // YYYY-MM-DD
    name: string
  }
>

export type WeeklyDayOffRegistered = EventBase<
  "WeeklyDayOffRegistered",
  {
    staffId: number
    date: string // YYYY-MM-DD
  }
>

export type WeeklyDayOffChanged = EventBase<
  "WeeklyDayOffChanged",
  {
    staffId: number
    oldDate: string
    newDate: string
    reason: string
  }
>

export type DisasterDayRegistered = EventBase<
  "DisasterDayRegistered",
  {
    date: string // YYYY-MM-DD
    reason: string
  }
>

export type SubstituteHolidayDecided = EventBase<
  "SubstituteHolidayDecided",
  {
    staffId: number
    originalHoliday: string // YYYY-MM-DD
    substituteDate: string  // YYYY-MM-DD
    reason:
      | "WEEKLY_DAY_OFF_OVERLAPPED"
      | "DISASTER_RESPONSE"
      | "MANUAL"
  }
>
