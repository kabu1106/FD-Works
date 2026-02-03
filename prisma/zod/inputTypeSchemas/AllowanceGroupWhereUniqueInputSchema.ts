import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceGroupWhereInputSchema } from './AllowanceGroupWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { AllowanceTypeListRelationFilterSchema } from './AllowanceTypeListRelationFilterSchema';

export const AllowanceGroupWhereUniqueInputSchema: z.ZodType<Prisma.AllowanceGroupWhereUniqueInput> = z.union([
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
  AND: z.union([ z.lazy(() => AllowanceGroupWhereInputSchema), z.lazy(() => AllowanceGroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AllowanceGroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AllowanceGroupWhereInputSchema), z.lazy(() => AllowanceGroupWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  allowanceTypes: z.lazy(() => AllowanceTypeListRelationFilterSchema).optional(),
}));

export default AllowanceGroupWhereUniqueInputSchema;
