import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumScheduleStatusFilterSchema } from './EnumScheduleStatusFilterSchema';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const DutyScalarWhereInputSchema: z.ZodType<Prisma.DutyScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DutyScalarWhereInputSchema), z.lazy(() => DutyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DutyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DutyScalarWhereInputSchema), z.lazy(() => DutyScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  teamId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => EnumScheduleStatusFilterSchema), z.lazy(() => ScheduleStatusSchema) ]).optional(),
  memo: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isLocked: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  lockedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  lockedByUserId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  hasEverCancelled: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default DutyScalarWhereInputSchema;
