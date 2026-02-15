import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutDutyDayTypesInputSchema } from './StaffUpdateWithoutDutyDayTypesInputSchema';
import { StaffUncheckedUpdateWithoutDutyDayTypesInputSchema } from './StaffUncheckedUpdateWithoutDutyDayTypesInputSchema';
import { StaffCreateWithoutDutyDayTypesInputSchema } from './StaffCreateWithoutDutyDayTypesInputSchema';
import { StaffUncheckedCreateWithoutDutyDayTypesInputSchema } from './StaffUncheckedCreateWithoutDutyDayTypesInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutDutyDayTypesInputSchema: z.ZodType<Prisma.StaffUpsertWithoutDutyDayTypesInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutDutyDayTypesInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutDutyDayTypesInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutDutyDayTypesInputSchema), z.lazy(() => StaffUncheckedCreateWithoutDutyDayTypesInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutDutyDayTypesInputSchema;
