import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { WorkGroupAssignmentCreateNestedManyWithoutDutyInputSchema } from './WorkGroupAssignmentCreateNestedManyWithoutDutyInputSchema';
import { SpecialLeaveAssignmentCreateNestedManyWithoutDutyInputSchema } from './SpecialLeaveAssignmentCreateNestedManyWithoutDutyInputSchema';
import { IncidentCreateNestedManyWithoutDutyInputSchema } from './IncidentCreateNestedManyWithoutDutyInputSchema';
import { AttendanceCreateNestedManyWithoutDutyInputSchema } from './AttendanceCreateNestedManyWithoutDutyInputSchema';
import { OvertimeSummaryCreateNestedManyWithoutDutyInputSchema } from './OvertimeSummaryCreateNestedManyWithoutDutyInputSchema';

export const DutyCreateWithoutTeamInputSchema: z.ZodType<Prisma.DutyCreateWithoutTeamInput> = z.strictObject({
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
  workGroupAssignments: z.lazy(() => WorkGroupAssignmentCreateNestedManyWithoutDutyInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentCreateNestedManyWithoutDutyInputSchema).optional(),
  incidents: z.lazy(() => IncidentCreateNestedManyWithoutDutyInputSchema).optional(),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutDutyInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryCreateNestedManyWithoutDutyInputSchema).optional(),
});

export default DutyCreateWithoutTeamInputSchema;
