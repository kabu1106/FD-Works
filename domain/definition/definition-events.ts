import { EventBase } from "../shared/base"

export type SleepTimeDefined = EventBase<
  "SleepTimeDefined",
  {
    workGroupId: number
    startMinute: number // 0–1950
    endMinute: number
  }
>

export type SleepTimeDefinitionChanged = EventBase<
  "SleepTimeDefinitionChanged",
  {
    workGroupId: number
    oldStartMinute: number
    oldEndMinute: number
    newStartMinute: number
    newEndMinute: number
    reason: string
  }
>

export type OvertimeRuleDefined = EventBase<
  "OvertimeRuleDefined",
  {
    workGroupId: number
    rateCategoryId: number
    startMinute: number
    endMinute: number
    rate: number
  }
>

export type OvertimeRuleChanged = EventBase<
  "OvertimeRuleChanged",
  {
    workGroupId: number
    rateCategoryId: number
    oldRate: number
    newRate: number
    reason: string
  }
>
