import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeeklyDayOffWhereUniqueInputSchema } from './WeeklyDayOffWhereUniqueInputSchema';
import { WeeklyDayOffUpdateWithoutStaffInputSchema } from './WeeklyDayOffUpdateWithoutStaffInputSchema';
import { WeeklyDayOffUncheckedUpdateWithoutStaffInputSchema } from './WeeklyDayOffUncheckedUpdateWithoutStaffInputSchema';

export const WeeklyDayOffUpdateWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.WeeklyDayOffUpdateWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => WeeklyDayOffWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WeeklyDayOffUpdateWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default WeeklyDayOffUpdateWithWhereUniqueWithoutStaffInputSchema;
