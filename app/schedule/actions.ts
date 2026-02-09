'use server'

import { prisma as db } from '../../lib/db/prisma'
import { revalidatePath } from 'next/cache'
import { ScheduleStatus } from '@prisma/client'
import { normalizeDateToJST } from '@/lib/timeUtils'

/**
 * 勤務表の1日を取得
 */
export async function getScheduleDayAction(dateString: string) {
  const date = normalizeDateToJST(dateString)

  const scheduleDay = await db.duty.upsert({
    where: { date },
    update: {},
    create: {
      date,
      status: 'UNAPPROVED',
      shifttype: 'DUTY24',
    },
    include: {
      workGroupAssignments: {
        include: {
          staff: true,
          workGroup: true,
        },
      },
      specialLeaves: true,
    },
  })

  return scheduleDay
}

/**
 * 職員を仮眠グループに追加
 */
export async function addEmployeeToGroupAction(
  dateString: string,
  staffNo: string,
  workGroupId: number
) {
  const date = normalizeDateToJST(dateString)

  const day = await db.scheduleDay.upsert({
    where: { date },
    update: {},
    create: { date },
  })

  await db.workGroupAssignment.upsert({
    where: {
      scheduleDayId_staffNo: {
        scheduleDayId: day.id,
        staffNo,
      },
    },
    update: {
      workGroupId,
    },
    create: {
      scheduleDayId: day.id,
      staffNo,
      workGroupId,
    },
  })

  revalidatePath('/schedule')
  return { success: true }
}

/**
 * 職員を仮眠グループから削除
 */
export async function removeEmployeeFromGroupAction(
  assignmentId: string
) {
  await db.workGroupAssignment.delete({
    where: { id: assignmentId },
  })

  revalidatePath('/schedule')
  return { success: true }
}

/**
 * 特別休暇を追加
 */
export async function addSpecialLeaveAction(formData: {
  dateString: string
  staffNo: string
  type: string
  baseDate: Date
  startTime: Date
  endTime: Date
}) {
  const date = normalizeDateToJST(formData.dateString)

  const day = await db.scheduleDay.upsert({
    where: { date },
    update: {},
    create: { date },
  })

  await db.specialLeave.create({
    data: {
      scheduleDayId: day.id,
      staffNo: formData.staffNo,
      type: formData.type,
      baseDate: formData.baseDate,
      startTime: formData.startTime,
      endTime: formData.endTime,
    },
  })

  revalidatePath('/schedule')
  return { success: true }
}

/**
 * 勤務表の状態を更新
 */
export async function updateScheduleStatusAction(
  dateString: string,
  status: ScheduleStatus,
  options?: { markCancelled?: boolean }
) {
  const date = normalizeDateToJST(dateString)
  await db.scheduleDay.update({
    where: { date },
    data: {
      status,
      hasEverCancelled: options?.markCancelled ?? undefined,
    },
  })

  revalidatePath('/schedule')
  return { success: true }
}

/** 
 * 特別休暇を取消（削除）する
 */
export async function removeSpecialLeaveAction(specialLeaveId: string) {
  await db.specialLeave.delete({
    where: { id: specialLeaveId },
  })

  revalidatePath('/schedule')
  return { success: true }
}


