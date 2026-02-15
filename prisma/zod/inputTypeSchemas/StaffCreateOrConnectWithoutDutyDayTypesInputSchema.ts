import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutDutyDayTypesInputSchema } from './StaffCreateWithoutDutyDayTypesInputSchema';
import { StaffUncheckedCreateWithoutDutyDayTypesInputSchema } from './StaffUncheckedCreateWithoutDutyDayTypesInputSchema';

export const StaffCreateOrConnectWithoutDutyDayTypesInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutDutyDayTypesInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutDutyDayTypesInputSchema), z.lazy(() => StaffUncheckedCreateWithoutDutyDayTypesInputSchema) ]),
});

export default StaffCreateOrConnectWithoutDutyDayTypesInputSchema;
