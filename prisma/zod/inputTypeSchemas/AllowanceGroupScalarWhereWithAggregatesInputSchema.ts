import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const AllowanceGroupScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AllowanceGroupScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AllowanceGroupScalarWhereWithAggregatesInputSchema), z.lazy(() => AllowanceGroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AllowanceGroupScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AllowanceGroupScalarWhereWithAggregatesInputSchema), z.lazy(() => AllowanceGroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
});

export default AllowanceGroupScalarWhereWithAggregatesInputSchema;
