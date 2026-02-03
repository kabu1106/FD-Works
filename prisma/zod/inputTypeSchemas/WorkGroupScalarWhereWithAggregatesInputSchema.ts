import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const WorkGroupScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WorkGroupScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WorkGroupScalarWhereWithAggregatesInputSchema), z.lazy(() => WorkGroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkGroupScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkGroupScalarWhereWithAggregatesInputSchema), z.lazy(() => WorkGroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export default WorkGroupScalarWhereWithAggregatesInputSchema;
