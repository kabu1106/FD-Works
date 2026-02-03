import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const SpecialLeaveTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SpecialLeaveTypeScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SpecialLeaveTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => SpecialLeaveTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpecialLeaveTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpecialLeaveTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => SpecialLeaveTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  specialLeaveGroupId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
});

export default SpecialLeaveTypeScalarWhereWithAggregatesInputSchema;
