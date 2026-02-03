import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupWhereInputSchema } from './WorkGroupWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { OvertimeSlotListRelationFilterSchema } from './OvertimeSlotListRelationFilterSchema';
import { WorkGroupAssignmentListRelationFilterSchema } from './WorkGroupAssignmentListRelationFilterSchema';

export const WorkGroupWhereUniqueInputSchema: z.ZodType<Prisma.WorkGroupWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    code: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    code: z.string(),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => WorkGroupWhereInputSchema), z.lazy(() => WorkGroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkGroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkGroupWhereInputSchema), z.lazy(() => WorkGroupWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotListRelationFilterSchema).optional(),
  WorkGroupAssignment: z.lazy(() => WorkGroupAssignmentListRelationFilterSchema).optional(),
}));

export default WorkGroupWhereUniqueInputSchema;
