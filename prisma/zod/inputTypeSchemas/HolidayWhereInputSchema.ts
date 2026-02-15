import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const HolidayWhereInputSchema: z.ZodType<Prisma.HolidayWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => HolidayWhereInputSchema), z.lazy(() => HolidayWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HolidayWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HolidayWhereInputSchema), z.lazy(() => HolidayWhereInputSchema).array() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
});

export default HolidayWhereInputSchema;
