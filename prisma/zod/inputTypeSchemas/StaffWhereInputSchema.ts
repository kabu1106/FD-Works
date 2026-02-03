import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { TeamRelationFilterSchema } from './TeamRelationFilterSchema';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { WorkGroupAssignmentListRelationFilterSchema } from './WorkGroupAssignmentListRelationFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { SpecialLeaveAssignmentListRelationFilterSchema } from './SpecialLeaveAssignmentListRelationFilterSchema';
import { IncidentStaffListRelationFilterSchema } from './IncidentStaffListRelationFilterSchema';
import { AttendanceListRelationFilterSchema } from './AttendanceListRelationFilterSchema';
import { OvertimeSummaryListRelationFilterSchema } from './OvertimeSummaryListRelationFilterSchema';

export const StaffWhereInputSchema: z.ZodType<Prisma.StaffWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => StaffWhereInputSchema), z.lazy(() => StaffWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StaffWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StaffWhereInputSchema), z.lazy(() => StaffWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  staffNo: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  photoKey: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  teamId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  team: z.union([ z.lazy(() => TeamRelationFilterSchema), z.lazy(() => TeamWhereInputSchema) ]).optional(),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentListRelationFilterSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffListRelationFilterSchema).optional(),
  Attendance: z.lazy(() => AttendanceListRelationFilterSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryListRelationFilterSchema).optional(),
});

export default StaffWhereInputSchema;
