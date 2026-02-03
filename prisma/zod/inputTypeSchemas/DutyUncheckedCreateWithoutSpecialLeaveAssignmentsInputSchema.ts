import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { WorkGroupAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema } from './WorkGroupAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema';
import { IncidentUncheckedCreateNestedManyWithoutDutyInputSchema } from './IncidentUncheckedCreateNestedManyWithoutDutyInputSchema';
import { AttendanceUncheckedCreateNestedManyWithoutDutyInputSchema } from './AttendanceUncheckedCreateNestedManyWithoutDutyInputSchema';
import { OvertimeSummaryUncheckedCreateNestedManyWithoutDutyInputSchema } from './OvertimeSummaryUncheckedCreateNestedManyWithoutDutyInputSchema';

export const DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  teamId: z.number().int(),
  status: z.lazy(() => ScheduleStatusSchema).optional(),
  memo: z.string().optional(),
  isLocked: z.boolean().optional(),
  lockedAt: z.coerce.date().optional().nullable(),
  lockedByUserId: z.string().optional().nullable(),
  hasEverCancelled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workGroupAssignments: z.lazy(() => WorkGroupAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
  incidents: z.lazy(() => IncidentUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
});

export default DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema;
