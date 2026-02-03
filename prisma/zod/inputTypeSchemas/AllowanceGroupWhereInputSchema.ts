import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { AllowanceTypeListRelationFilterSchema } from './AllowanceTypeListRelationFilterSchema';

export const AllowanceGroupWhereInputSchema: z.ZodType<Prisma.AllowanceGroupWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AllowanceGroupWhereInputSchema), z.lazy(() => AllowanceGroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AllowanceGroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AllowanceGroupWhereInputSchema), z.lazy(() => AllowanceGroupWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  allowanceTypes: z.lazy(() => AllowanceTypeListRelationFilterSchema).optional(),
});

export default AllowanceGroupWhereInputSchema;
