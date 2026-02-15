import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HolidayWhereInputSchema } from './HolidayWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const HolidayWhereUniqueInputSchema: z.ZodType<Prisma.HolidayWhereUniqueInput> = z.object({
  date: z.coerce.date(),
})
.and(z.strictObject({
  date: z.coerce.date().optional(),
  AND: z.union([ z.lazy(() => HolidayWhereInputSchema), z.lazy(() => HolidayWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HolidayWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HolidayWhereInputSchema), z.lazy(() => HolidayWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
}));

export default HolidayWhereUniqueInputSchema;
