import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const WeeklyDayOffScalarWhereInputSchema: z.ZodType<Prisma.WeeklyDayOffScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WeeklyDayOffScalarWhereInputSchema), z.lazy(() => WeeklyDayOffScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeeklyDayOffScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeeklyDayOffScalarWhereInputSchema), z.lazy(() => WeeklyDayOffScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default WeeklyDayOffScalarWhereInputSchema;
