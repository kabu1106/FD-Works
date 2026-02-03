import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const OvertimeSlotScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OvertimeSlotScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSlotScalarWhereWithAggregatesInputSchema), z.lazy(() => OvertimeSlotScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSlotScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSlotScalarWhereWithAggregatesInputSchema), z.lazy(() => OvertimeSlotScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  workGroupId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  startMinute: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  endMinute: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
});

export default OvertimeSlotScalarWhereWithAggregatesInputSchema;
