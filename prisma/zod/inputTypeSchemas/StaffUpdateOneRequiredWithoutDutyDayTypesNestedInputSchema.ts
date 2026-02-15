import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutDutyDayTypesInputSchema } from './StaffCreateWithoutDutyDayTypesInputSchema';
import { StaffUncheckedCreateWithoutDutyDayTypesInputSchema } from './StaffUncheckedCreateWithoutDutyDayTypesInputSchema';
import { StaffCreateOrConnectWithoutDutyDayTypesInputSchema } from './StaffCreateOrConnectWithoutDutyDayTypesInputSchema';
import { StaffUpsertWithoutDutyDayTypesInputSchema } from './StaffUpsertWithoutDutyDayTypesInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutDutyDayTypesInputSchema } from './StaffUpdateToOneWithWhereWithoutDutyDayTypesInputSchema';
import { StaffUpdateWithoutDutyDayTypesInputSchema } from './StaffUpdateWithoutDutyDayTypesInputSchema';
import { StaffUncheckedUpdateWithoutDutyDayTypesInputSchema } from './StaffUncheckedUpdateWithoutDutyDayTypesInputSchema';

export const StaffUpdateOneRequiredWithoutDutyDayTypesNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneRequiredWithoutDutyDayTypesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutDutyDayTypesInputSchema), z.lazy(() => StaffUncheckedCreateWithoutDutyDayTypesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutDutyDayTypesInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutDutyDayTypesInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutDutyDayTypesInputSchema), z.lazy(() => StaffUpdateWithoutDutyDayTypesInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutDutyDayTypesInputSchema) ]).optional(),
});

export default StaffUpdateOneRequiredWithoutDutyDayTypesNestedInputSchema;
