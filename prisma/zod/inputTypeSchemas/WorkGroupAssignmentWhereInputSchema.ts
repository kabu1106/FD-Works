import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DutyRelationFilterSchema } from './DutyRelationFilterSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { WorkGroupRelationFilterSchema } from './WorkGroupRelationFilterSchema';
import { WorkGroupWhereInputSchema } from './WorkGroupWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const WorkGroupAssignmentWhereInputSchema: z.ZodType<Prisma.WorkGroupAssignmentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WorkGroupAssignmentWhereInputSchema), z.lazy(() => WorkGroupAssignmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkGroupAssignmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkGroupAssignmentWhereInputSchema), z.lazy(() => WorkGroupAssignmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  workGroupId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duty: z.union([ z.lazy(() => DutyRelationFilterSchema), z.lazy(() => DutyWhereInputSchema) ]).optional(),
  workGroup: z.union([ z.lazy(() => WorkGroupRelationFilterSchema), z.lazy(() => WorkGroupWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
});

export default WorkGroupAssignmentWhereInputSchema;
