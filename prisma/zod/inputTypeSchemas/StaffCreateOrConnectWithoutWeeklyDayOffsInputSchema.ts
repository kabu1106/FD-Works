import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutWeeklyDayOffsInputSchema } from './StaffCreateWithoutWeeklyDayOffsInputSchema';
import { StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema } from './StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema';

export const StaffCreateOrConnectWithoutWeeklyDayOffsInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutWeeklyDayOffsInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutWeeklyDayOffsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema) ]),
});

export default StaffCreateOrConnectWithoutWeeklyDayOffsInputSchema;
