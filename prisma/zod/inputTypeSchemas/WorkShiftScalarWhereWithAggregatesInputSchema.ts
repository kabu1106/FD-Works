import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumShiftTypeWithAggregatesFilterSchema } from './EnumShiftTypeWithAggregatesFilterSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const WorkShiftScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WorkShiftScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WorkShiftScalarWhereWithAggregatesInputSchema), z.lazy(() => WorkShiftScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkShiftScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkShiftScalarWhereWithAggregatesInputSchema), z.lazy(() => WorkShiftScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  shiftType: z.union([ z.lazy(() => EnumShiftTypeWithAggregatesFilterSchema), z.lazy(() => ShiftTypeSchema) ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
});

export default WorkShiftScalarWhereWithAggregatesInputSchema;
