import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutDutyDayTypesInputSchema } from './StaffUpdateWithoutDutyDayTypesInputSchema';
import { StaffUncheckedUpdateWithoutDutyDayTypesInputSchema } from './StaffUncheckedUpdateWithoutDutyDayTypesInputSchema';

export const StaffUpdateToOneWithWhereWithoutDutyDayTypesInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutDutyDayTypesInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutDutyDayTypesInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutDutyDayTypesInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutDutyDayTypesInputSchema;
