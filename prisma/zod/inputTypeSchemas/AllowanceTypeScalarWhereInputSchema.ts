import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const AllowanceTypeScalarWhereInputSchema: z.ZodType<Prisma.AllowanceTypeScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AllowanceTypeScalarWhereInputSchema), z.lazy(() => AllowanceTypeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AllowanceTypeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AllowanceTypeScalarWhereInputSchema), z.lazy(() => AllowanceTypeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  allowanceGroupId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
});

export default AllowanceTypeScalarWhereInputSchema;
