import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { TeamCreateNestedOneWithoutDutiesInputSchema } from './TeamCreateNestedOneWithoutDutiesInputSchema';
import { WorkGroupAssignmentCreateNestedManyWithoutDutyInputSchema } from './WorkGroupAssignmentCreateNestedManyWithoutDutyInputSchema';
import { SpecialLeaveAssignmentCreateNestedManyWithoutDutyInputSchema } from './SpecialLeaveAssignmentCreateNestedManyWithoutDutyInputSchema';
import { IncidentCreateNestedManyWithoutDutyInputSchema } from './IncidentCreateNestedManyWithoutDutyInputSchema';
import { AttendanceCreateNestedManyWithoutDutyInputSchema } from './AttendanceCreateNestedManyWithoutDutyInputSchema';
import { OvertimeSummaryCreateNestedManyWithoutDutyInputSchema } from './OvertimeSummaryCreateNestedManyWithoutDutyInputSchema';
import { AttendanceEventCreateNestedManyWithoutDutyInputSchema } from './AttendanceEventCreateNestedManyWithoutDutyInputSchema';
import { DutyDayTypeCreateNestedManyWithoutDutyInputSchema } from './DutyDayTypeCreateNestedManyWithoutDutyInputSchema';

export const DutyCreateInputSchema: z.ZodType<Prisma.DutyCreateInput> = z.strictObject({
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
  team: z.lazy(() => TeamCreateNestedOneWithoutDutiesInputSchema),
  workGroupAssignments: z.lazy(() => WorkGroupAssignmentCreateNestedManyWithoutDutyInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentCreateNestedManyWithoutDutyInputSchema).optional(),
  incidents: z.lazy(() => IncidentCreateNestedManyWithoutDutyInputSchema).optional(),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutDutyInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryCreateNestedManyWithoutDutyInputSchema).optional(),
  attendanceEvents: z.lazy(() => AttendanceEventCreateNestedManyWithoutDutyInputSchema).optional(),
  dutyDayTypes: z.lazy(() => DutyDayTypeCreateNestedManyWithoutDutyInputSchema).optional(),
});

export default DutyCreateInputSchema;
