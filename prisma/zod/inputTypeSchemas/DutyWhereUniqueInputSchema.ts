import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDateTeamIdCompoundUniqueInputSchema } from './DutyDateTeamIdCompoundUniqueInputSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumScheduleStatusFilterSchema } from './EnumScheduleStatusFilterSchema';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { TeamRelationFilterSchema } from './TeamRelationFilterSchema';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { WorkGroupAssignmentListRelationFilterSchema } from './WorkGroupAssignmentListRelationFilterSchema';
import { SpecialLeaveAssignmentListRelationFilterSchema } from './SpecialLeaveAssignmentListRelationFilterSchema';
import { IncidentListRelationFilterSchema } from './IncidentListRelationFilterSchema';
import { AttendanceListRelationFilterSchema } from './AttendanceListRelationFilterSchema';
import { OvertimeSummaryListRelationFilterSchema } from './OvertimeSummaryListRelationFilterSchema';
import { AttendanceEventListRelationFilterSchema } from './AttendanceEventListRelationFilterSchema';
import { DutyDayTypeListRelationFilterSchema } from './DutyDayTypeListRelationFilterSchema';

export const DutyWhereUniqueInputSchema: z.ZodType<Prisma.DutyWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    date_teamId: z.lazy(() => DutyDateTeamIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    date_teamId: z.lazy(() => DutyDateTeamIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  date_teamId: z.lazy(() => DutyDateTeamIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => DutyWhereInputSchema), z.lazy(() => DutyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DutyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DutyWhereInputSchema), z.lazy(() => DutyWhereInputSchema).array() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  teamId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  status: z.union([ z.lazy(() => EnumScheduleStatusFilterSchema), z.lazy(() => ScheduleStatusSchema) ]).optional(),
  memo: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isLocked: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  lockedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  lockedByUserId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  hasEverCancelled: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  team: z.union([ z.lazy(() => TeamRelationFilterSchema), z.lazy(() => TeamWhereInputSchema) ]).optional(),
  workGroupAssignments: z.lazy(() => WorkGroupAssignmentListRelationFilterSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentListRelationFilterSchema).optional(),
  incidents: z.lazy(() => IncidentListRelationFilterSchema).optional(),
  attendance: z.lazy(() => AttendanceListRelationFilterSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryListRelationFilterSchema).optional(),
  attendanceEvents: z.lazy(() => AttendanceEventListRelationFilterSchema).optional(),
  dutyDayTypes: z.lazy(() => DutyDayTypeListRelationFilterSchema).optional(),
}));

export default DutyWhereUniqueInputSchema;
