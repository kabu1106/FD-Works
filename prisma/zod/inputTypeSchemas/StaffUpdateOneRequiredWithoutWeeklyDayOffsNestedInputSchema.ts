import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutWeeklyDayOffsInputSchema } from './StaffCreateWithoutWeeklyDayOffsInputSchema';
import { StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema } from './StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema';
import { StaffCreateOrConnectWithoutWeeklyDayOffsInputSchema } from './StaffCreateOrConnectWithoutWeeklyDayOffsInputSchema';
import { StaffUpsertWithoutWeeklyDayOffsInputSchema } from './StaffUpsertWithoutWeeklyDayOffsInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutWeeklyDayOffsInputSchema } from './StaffUpdateToOneWithWhereWithoutWeeklyDayOffsInputSchema';
import { StaffUpdateWithoutWeeklyDayOffsInputSchema } from './StaffUpdateWithoutWeeklyDayOffsInputSchema';
import { StaffUncheckedUpdateWithoutWeeklyDayOffsInputSchema } from './StaffUncheckedUpdateWithoutWeeklyDayOffsInputSchema';

export const StaffUpdateOneRequiredWithoutWeeklyDayOffsNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneRequiredWithoutWeeklyDayOffsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutWeeklyDayOffsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutWeeklyDayOffsInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutWeeklyDayOffsInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutWeeklyDayOffsInputSchema), z.lazy(() => StaffUpdateWithoutWeeklyDayOffsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutWeeklyDayOffsInputSchema) ]).optional(),
});

export default StaffUpdateOneRequiredWithoutWeeklyDayOffsNestedInputSchema;
