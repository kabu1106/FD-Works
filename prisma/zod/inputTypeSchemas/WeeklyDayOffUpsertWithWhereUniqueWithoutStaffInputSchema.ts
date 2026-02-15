import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeeklyDayOffWhereUniqueInputSchema } from './WeeklyDayOffWhereUniqueInputSchema';
import { WeeklyDayOffUpdateWithoutStaffInputSchema } from './WeeklyDayOffUpdateWithoutStaffInputSchema';
import { WeeklyDayOffUncheckedUpdateWithoutStaffInputSchema } from './WeeklyDayOffUncheckedUpdateWithoutStaffInputSchema';
import { WeeklyDayOffCreateWithoutStaffInputSchema } from './WeeklyDayOffCreateWithoutStaffInputSchema';
import { WeeklyDayOffUncheckedCreateWithoutStaffInputSchema } from './WeeklyDayOffUncheckedCreateWithoutStaffInputSchema';

export const WeeklyDayOffUpsertWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.WeeklyDayOffUpsertWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => WeeklyDayOffWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WeeklyDayOffUpdateWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => WeeklyDayOffCreateWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffUncheckedCreateWithoutStaffInputSchema) ]),
});

export default WeeklyDayOffUpsertWithWhereUniqueWithoutStaffInputSchema;
