/**
 * ドメインモデルとUIモデルの変換アダプター
 * 既存のUIとの互換性を保つための変換処理
 */

import { ScheduleDayDomain } from './types'
import { WorkScheduleDay } from '@/types'

/**
 * ドメインモデルをUIモデルに変換
 */
export function domainToUI(domain: ScheduleDayDomain): WorkScheduleDay {
  return {
    date: domain.date,
    sleepGroups: domain.sleepGroups,
    specialLeaves: domain.specialLeaves.map(leave => ({
      id: leave.id,
      employeeId: leave.employeeId,
      type: leave.type as any,
      baseDate: leave.baseDate,
      startDate: leave.startDate,
      startTime: leave.startTime,
      startMinutes: leave.startMinutes,
      endDate: leave.endDate,
      endTime: leave.endTime,
      endMinutes: leave.endMinutes,
    })),
    status: domain.status,
    hasEverCancelled: domain.hasEverCancelled,
  }
}

/**
 * UIモデルをドメインモデルに変換
 */
export function uiToDomain(ui: WorkScheduleDay): ScheduleDayDomain {
  return {
    id: '',
    date: ui.date,
    status: ui.status,
    hasEverCancelled: ui.hasEverCancelled || false,
    sleepGroups: ui.sleepGroups,
    specialLeaves: ui.specialLeaves.map(leave => ({
      id: leave.id,
      employeeId: leave.employeeId,
      type: leave.type,
      baseDate: leave.baseDate,
      startDate: leave.startDate,
      startTime: leave.startTime,
      startMinutes: leave.startMinutes,
      endDate: leave.endDate,
      endTime: leave.endTime,
      endMinutes: leave.endMinutes,
    })),
  }
}
