import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumScheduleStatusWithAggregatesFilterSchema } from './EnumScheduleStatusWithAggregatesFilterSchema';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const DutyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DutyScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DutyScalarWhereWithAggregatesInputSchema), z.lazy(() => DutyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DutyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DutyScalarWhereWithAggregatesInputSchema), z.lazy(() => DutyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  teamId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => EnumScheduleStatusWithAggregatesFilterSchema), z.lazy(() => ScheduleStatusSchema) ]).optional(),
  memo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  isLocked: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  lockedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
  lockedByUserId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  hasEverCancelled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default DutyScalarWhereWithAggregatesInputSchema;
