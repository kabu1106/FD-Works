import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeeklyDayOffWhereInputSchema } from './WeeklyDayOffWhereInputSchema';

export const WeeklyDayOffListRelationFilterSchema: z.ZodType<Prisma.WeeklyDayOffListRelationFilter> = z.strictObject({
  every: z.lazy(() => WeeklyDayOffWhereInputSchema).optional(),
  some: z.lazy(() => WeeklyDayOffWhereInputSchema).optional(),
  none: z.lazy(() => WeeklyDayOffWhereInputSchema).optional(),
});

export default WeeklyDayOffListRelationFilterSchema;
