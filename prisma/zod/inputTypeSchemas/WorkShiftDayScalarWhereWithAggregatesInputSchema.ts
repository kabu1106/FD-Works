import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumWorkTypeWithAggregatesFilterSchema } from './EnumWorkTypeWithAggregatesFilterSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const WorkShiftDayScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WorkShiftDayScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WorkShiftDayScalarWhereWithAggregatesInputSchema), z.lazy(() => WorkShiftDayScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkShiftDayScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkShiftDayScalarWhereWithAggregatesInputSchema), z.lazy(() => WorkShiftDayScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumWorkTypeWithAggregatesFilterSchema), z.lazy(() => WorkTypeSchema) ]).optional(),
  workShiftId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
});

export default WorkShiftDayScalarWhereWithAggregatesInputSchema;
