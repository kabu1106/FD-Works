import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { SpecialLeaveTypeListRelationFilterSchema } from './SpecialLeaveTypeListRelationFilterSchema';

export const SpecialLeaveGroupWhereInputSchema: z.ZodType<Prisma.SpecialLeaveGroupWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SpecialLeaveGroupWhereInputSchema), z.lazy(() => SpecialLeaveGroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpecialLeaveGroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpecialLeaveGroupWhereInputSchema), z.lazy(() => SpecialLeaveGroupWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  SpecialLeaveType: z.lazy(() => SpecialLeaveTypeListRelationFilterSchema).optional(),
});

export default SpecialLeaveGroupWhereInputSchema;
