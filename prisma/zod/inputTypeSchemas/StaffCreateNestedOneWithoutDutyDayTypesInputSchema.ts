import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutDutyDayTypesInputSchema } from './StaffCreateWithoutDutyDayTypesInputSchema';
import { StaffUncheckedCreateWithoutDutyDayTypesInputSchema } from './StaffUncheckedCreateWithoutDutyDayTypesInputSchema';
import { StaffCreateOrConnectWithoutDutyDayTypesInputSchema } from './StaffCreateOrConnectWithoutDutyDayTypesInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutDutyDayTypesInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutDutyDayTypesInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutDutyDayTypesInputSchema), z.lazy(() => StaffUncheckedCreateWithoutDutyDayTypesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutDutyDayTypesInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutDutyDayTypesInputSchema;
