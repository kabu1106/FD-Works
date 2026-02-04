import { z } from 'zod'

export const ScheduleDayUISchema = z.object({
  date: z.string(),
  status: z.enum(['UNAPPROVED', 'APPROVED', 'PENDING']),
  isLocked: z.boolean(),

  teams: z.array(
    z.object({
      teamId: z.number(),
      teamName: z.string(),
      shiftType: z.enum(['DUTY_24H', 'DAY_SHIFT']),
      workType: z.string(),

      workGroups: z.array(
        z.object({
          workGroupId: z.number(),
          workGroupName: z.string(),

          staffs: z.array(
            z.object({
              staffId: z.number(),
              staffNo: z.string(),
              name: z.string(),
              isAssigned: z.boolean(),
              isOnLeave: z.boolean(),
              attendance: z
                .object({
                  startTime: z.string().optional(),
                  endTime: z.string().optional(),
                })
                .optional(),
            })
          ),
        })
      ),
    })
  ),

  specialLeaves: z.array(
    z.object({
      staffId: z.number(),
      staffName: z.string(),
      leaveType: z.object({
        id: z.string(),
        name: z.string(),
        color: z.string().optional(),
      }),
      startTime: z.string(),
      endTime: z.string(),
    })
  ),
})
