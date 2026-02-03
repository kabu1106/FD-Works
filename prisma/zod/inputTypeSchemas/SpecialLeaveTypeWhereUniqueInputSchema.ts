import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeWhereInputSchema } from './SpecialLeaveTypeWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { SpecialLeaveGroupRelationFilterSchema } from './SpecialLeaveGroupRelationFilterSchema';
import { SpecialLeaveGroupWhereInputSchema } from './SpecialLeaveGroupWhereInputSchema';
import { SpecialLeaveAssignmentListRelationFilterSchema } from './SpecialLeaveAssignmentListRelationFilterSchema';

export const SpecialLeaveTypeWhereUniqueInputSchema: z.ZodType<Prisma.SpecialLeaveTypeWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    code: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    code: z.string(),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => SpecialLeaveTypeWhereInputSchema), z.lazy(() => SpecialLeaveTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpecialLeaveTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpecialLeaveTypeWhereInputSchema), z.lazy(() => SpecialLeaveTypeWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  specialLeaveGroupId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  specialLeaveGroup: z.union([ z.lazy(() => SpecialLeaveGroupRelationFilterSchema), z.lazy(() => SpecialLeaveGroupWhereInputSchema) ]).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentListRelationFilterSchema).optional(),
}));

export default SpecialLeaveTypeWhereUniqueInputSchema;
