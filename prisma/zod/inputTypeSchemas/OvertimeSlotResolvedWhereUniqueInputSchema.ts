import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotResolvedWhereInputSchema } from './OvertimeSlotResolvedWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';

export const OvertimeSlotResolvedWhereUniqueInputSchema: z.ZodType<Prisma.OvertimeSlotResolvedWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => OvertimeSlotResolvedWhereInputSchema), z.lazy(() => OvertimeSlotResolvedWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSlotResolvedWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSlotResolvedWhereInputSchema), z.lazy(() => OvertimeSlotResolvedWhereInputSchema).array() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  startAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  minutes: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  rateSnapshot: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
}));

export default OvertimeSlotResolvedWhereUniqueInputSchema;
