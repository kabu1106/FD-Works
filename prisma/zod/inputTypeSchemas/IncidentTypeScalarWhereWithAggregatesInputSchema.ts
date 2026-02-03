import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const IncidentTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.IncidentTypeScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => IncidentTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => IncidentTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
});

export default IncidentTypeScalarWhereWithAggregatesInputSchema;
