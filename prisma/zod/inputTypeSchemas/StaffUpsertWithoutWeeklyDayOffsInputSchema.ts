import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutWeeklyDayOffsInputSchema } from './StaffUpdateWithoutWeeklyDayOffsInputSchema';
import { StaffUncheckedUpdateWithoutWeeklyDayOffsInputSchema } from './StaffUncheckedUpdateWithoutWeeklyDayOffsInputSchema';
import { StaffCreateWithoutWeeklyDayOffsInputSchema } from './StaffCreateWithoutWeeklyDayOffsInputSchema';
import { StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema } from './StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutWeeklyDayOffsInputSchema: z.ZodType<Prisma.StaffUpsertWithoutWeeklyDayOffsInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutWeeklyDayOffsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutWeeklyDayOffsInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutWeeklyDayOffsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutWeeklyDayOffsInputSchema;
