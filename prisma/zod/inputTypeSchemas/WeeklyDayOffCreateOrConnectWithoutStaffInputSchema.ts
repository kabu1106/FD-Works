import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeeklyDayOffWhereUniqueInputSchema } from './WeeklyDayOffWhereUniqueInputSchema';
import { WeeklyDayOffCreateWithoutStaffInputSchema } from './WeeklyDayOffCreateWithoutStaffInputSchema';
import { WeeklyDayOffUncheckedCreateWithoutStaffInputSchema } from './WeeklyDayOffUncheckedCreateWithoutStaffInputSchema';

export const WeeklyDayOffCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.WeeklyDayOffCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => WeeklyDayOffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WeeklyDayOffCreateWithoutStaffInputSchema), z.lazy(() => WeeklyDayOffUncheckedCreateWithoutStaffInputSchema) ]),
});

export default WeeklyDayOffCreateOrConnectWithoutStaffInputSchema;
