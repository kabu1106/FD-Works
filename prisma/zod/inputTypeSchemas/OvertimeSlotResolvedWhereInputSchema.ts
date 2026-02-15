import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';

export const OvertimeSlotResolvedWhereInputSchema: z.ZodType<Prisma.OvertimeSlotResolvedWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSlotResolvedWhereInputSchema), z.lazy(() => OvertimeSlotResolvedWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSlotResolvedWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSlotResolvedWhereInputSchema), z.lazy(() => OvertimeSlotResolvedWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  startAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  minutes: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  rateSnapshot: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default OvertimeSlotResolvedWhereInputSchema;
