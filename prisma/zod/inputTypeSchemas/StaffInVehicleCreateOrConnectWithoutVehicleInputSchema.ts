import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleWhereUniqueInputSchema } from './StaffInVehicleWhereUniqueInputSchema';
import { StaffInVehicleCreateWithoutVehicleInputSchema } from './StaffInVehicleCreateWithoutVehicleInputSchema';
import { StaffInVehicleUncheckedCreateWithoutVehicleInputSchema } from './StaffInVehicleUncheckedCreateWithoutVehicleInputSchema';

export const StaffInVehicleCreateOrConnectWithoutVehicleInputSchema: z.ZodType<Prisma.StaffInVehicleCreateOrConnectWithoutVehicleInput> = z.strictObject({
  where: z.lazy(() => StaffInVehicleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffInVehicleCreateWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleUncheckedCreateWithoutVehicleInputSchema) ]),
});

export default StaffInVehicleCreateOrConnectWithoutVehicleInputSchema;
