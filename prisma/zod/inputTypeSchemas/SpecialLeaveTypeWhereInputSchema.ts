import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { SpecialLeaveGroupRelationFilterSchema } from './SpecialLeaveGroupRelationFilterSchema';
import { SpecialLeaveGroupWhereInputSchema } from './SpecialLeaveGroupWhereInputSchema';
import { SpecialLeaveAssignmentListRelationFilterSchema } from './SpecialLeaveAssignmentListRelationFilterSchema';

export const SpecialLeaveTypeWhereInputSchema: z.ZodType<Prisma.SpecialLeaveTypeWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SpecialLeaveTypeWhereInputSchema), z.lazy(() => SpecialLeaveTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpecialLeaveTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpecialLeaveTypeWhereInputSchema), z.lazy(() => SpecialLeaveTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  specialLeaveGroupId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  specialLeaveGroup: z.union([ z.lazy(() => SpecialLeaveGroupRelationFilterSchema), z.lazy(() => SpecialLeaveGroupWhereInputSchema) ]).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentListRelationFilterSchema).optional(),
});

export default SpecialLeaveTypeWhereInputSchema;
