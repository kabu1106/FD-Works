import { WorkSchedule, WorkScheduleDay } from '@/types'

const STORAGE_KEY = 'fd-works-schedule'

// 勤務表データをローカルストレージに保存
export function saveSchedule(date: string, schedule: WorkScheduleDay): void {
  if (typeof window === 'undefined') return

  try {
    const existing = localStorage.getItem(STORAGE_KEY)
    const schedules: WorkSchedule = existing ? JSON.parse(existing) : {}
    schedules[date] = schedule
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schedules))
  } catch (error) {
    console.error('Failed to save schedule:', error)
  }
}

// 勤務表データをローカルストレージから読み込み
export function loadSchedule(date: string): WorkScheduleDay | null {
  if (typeof window === 'undefined') return null

  try {
    const existing = localStorage.getItem(STORAGE_KEY)
    if (!existing) return null

    const schedules: WorkSchedule = JSON.parse(existing)
    return schedules[date] || null
  } catch (error) {
    console.error('Failed to load schedule:', error)
    return null
  }
}

// 全ての勤務表データを読み込み
export function loadAllSchedules(): WorkSchedule {
  if (typeof window === 'undefined') return {}

  try {
    const existing = localStorage.getItem(STORAGE_KEY)
    return existing ? JSON.parse(existing) : {}
  } catch (error) {
    console.error('Failed to load schedules:', error)
    return {}
  }
}