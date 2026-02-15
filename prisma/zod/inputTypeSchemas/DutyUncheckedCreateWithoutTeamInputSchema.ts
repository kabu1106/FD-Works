import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { WorkGroupAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema } from './WorkGroupAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema } from './SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema';
import { IncidentUncheckedCreateNestedManyWithoutDutyInputSchema } from './IncidentUncheckedCreateNestedManyWithoutDutyInputSchema';
import { AttendanceUncheckedCreateNestedManyWithoutDutyInputSchema } from './AttendanceUncheckedCreateNestedManyWithoutDutyInputSchema';
import { OvertimeSummaryUncheckedCreateNestedManyWithoutDutyInputSchema } from './OvertimeSummaryUncheckedCreateNestedManyWithoutDutyInputSchema';
import { AttendanceEventUncheckedCreateNestedManyWithoutDutyInputSchema } from './AttendanceEventUncheckedCreateNestedManyWithoutDutyInputSchema';
import { DutyDayTypeUncheckedCreateNestedManyWithoutDutyInputSchema } from './DutyDayTypeUncheckedCreateNestedManyWithoutDutyInputSchema';

export const DutyUncheckedCreateWithoutTeamInputSchema: z.ZodType<Prisma.DutyUncheckedCreateWithoutTeamInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  status: z.lazy(() => ScheduleStatusSchema).optional(),
  memo: z.string().optional(),
  isLocked: z.boolean().optional(),
  lockedAt: z.coerce.date().optional().nullable(),
  lockedByUserId: z.string().optional().nullable(),
  hasEverCancelled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workGroupAssignments: z.lazy(() => WorkGroupAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
  incidents: z.lazy(() => IncidentUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
  attendanceEvents: z.lazy(() => AttendanceEventUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
  dutyDayTypes: z.lazy(() => DutyDayTypeUncheckedCreateNestedManyWithoutDutyInputSchema).optional(),
});

export default DutyUncheckedCreateWithoutTeamInputSchema;
