import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleWhereUniqueInputSchema } from './StaffInVehicleWhereUniqueInputSchema';
import { StaffInVehicleUpdateWithoutVehicleInputSchema } from './StaffInVehicleUpdateWithoutVehicleInputSchema';
import { StaffInVehicleUncheckedUpdateWithoutVehicleInputSchema } from './StaffInVehicleUncheckedUpdateWithoutVehicleInputSchema';

export const StaffInVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema: z.ZodType<Prisma.StaffInVehicleUpdateWithWhereUniqueWithoutVehicleInput> = z.strictObject({
  where: z.lazy(() => StaffInVehicleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StaffInVehicleUpdateWithoutVehicleInputSchema), z.lazy(() => StaffInVehicleUncheckedUpdateWithoutVehicleInputSchema) ]),
});

export default StaffInVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema;
