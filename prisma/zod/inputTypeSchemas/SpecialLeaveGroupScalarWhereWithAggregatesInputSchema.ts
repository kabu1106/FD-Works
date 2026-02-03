import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const SpecialLeaveGroupScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SpecialLeaveGroupScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SpecialLeaveGroupScalarWhereWithAggregatesInputSchema), z.lazy(() => SpecialLeaveGroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpecialLeaveGroupScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpecialLeaveGroupScalarWhereWithAggregatesInputSchema), z.lazy(() => SpecialLeaveGroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
});

export default SpecialLeaveGroupScalarWhereWithAggregatesInputSchema;
