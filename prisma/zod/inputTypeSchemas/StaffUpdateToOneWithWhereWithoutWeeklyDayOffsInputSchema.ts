import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutWeeklyDayOffsInputSchema } from './StaffUpdateWithoutWeeklyDayOffsInputSchema';
import { StaffUncheckedUpdateWithoutWeeklyDayOffsInputSchema } from './StaffUncheckedUpdateWithoutWeeklyDayOffsInputSchema';

export const StaffUpdateToOneWithWhereWithoutWeeklyDayOffsInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutWeeklyDayOffsInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutWeeklyDayOffsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutWeeklyDayOffsInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutWeeklyDayOffsInputSchema;
