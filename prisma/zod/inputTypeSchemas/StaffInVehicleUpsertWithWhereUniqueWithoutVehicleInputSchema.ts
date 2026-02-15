import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleWhereUniqueInputSchema } from './StaffInVehicleWhereUniqueInputSchema';
import { StaffInVehicleUpdateWithoutVehicleInputSchema } from './StaffInVehicleUpdateWithoutVehicleInputSchema';
import { StaffInVehicleUncheckedUpdateWithoutVehicleInputSchema } from './StaffInVehicleUncheckedUpdateWithoutVehicleInputSchema';
import { StaffInVehicleCreateWithoutVehicleInputSchema } from './StaffInVehicleCreateWithoutVehicleInputSchema';
import { StaffInVehicleUncheckedCreateWithoutVehicleInputSchema } from './StaffInVehicleUncheckedCreateWithoutVehicleInputSchema';

export const StaffInVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema: z.ZodType<Prisma.StaffInVehicleUpsertWithWhereUniqueWithoutVehicleInput> = z.strictObject({
  where: z.lazy(() => StaffInVehicleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StaffInVehicleUpdateWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleUncheckedUpdateWithoutVehicleInputSchema) ]),
  create: z.union([ z.lazy(() => StaffInVehicleCreateWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleUncheckedCreateWithoutVehicleInputSchema) ]),
});

export default StaffInVehicleUpsertWithWhereUniqueWithoutVehicleInputSchema;
