import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutWeeklyDayOffsInputSchema } from './StaffCreateWithoutWeeklyDayOffsInputSchema';
import { StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema } from './StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema';
import { StaffCreateOrConnectWithoutWeeklyDayOffsInputSchema } from './StaffCreateOrConnectWithoutWeeklyDayOffsInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutWeeklyDayOffsInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutWeeklyDayOffsInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutWeeklyDayOffsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutWeeklyDayOffsInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutWeeklyDayOffsInputSchema;
