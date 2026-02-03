import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveGroupWhereInputSchema } from './SpecialLeaveGroupWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { SpecialLeaveTypeListRelationFilterSchema } from './SpecialLeaveTypeListRelationFilterSchema';

export const SpecialLeaveGroupWhereUniqueInputSchema: z.ZodType<Prisma.SpecialLeaveGroupWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => SpecialLeaveGroupWhereInputSchema), z.lazy(() => SpecialLeaveGroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpecialLeaveGroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpecialLeaveGroupWhereInputSchema), z.lazy(() => SpecialLeaveGroupWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  SpecialLeaveType: z.lazy(() => SpecialLeaveTypeListRelationFilterSchema).optional(),
}));

export default SpecialLeaveGroupWhereUniqueInputSchema;
