import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleScalarWhereInputSchema } from './StaffInVehicleScalarWhereInputSchema';
import { StaffInVehicleUpdateManyMutationInputSchema } from './StaffInVehicleUpdateManyMutationInputSchema';
import { StaffInVehicleUncheckedUpdateManyWithoutVehicleInputSchema } from './StaffInVehicleUncheckedUpdateManyWithoutVehicleInputSchema';

export const StaffInVehicleUpdateManyWithWhereWithoutVehicleInputSchema: z.ZodType<Prisma.StaffInVehicleUpdateManyWithWhereWithoutVehicleInput> = z.strictObject({
  where: z.lazy(() => StaffInVehicleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StaffInVehicleUpdateManyMutationInputSchema), z.lazy(() => StaffInVehicleUncheckedUpdateManyWithoutVehicleInputSchema) ]),
});

export default StaffInVehicleUpdateManyWithWhereWithoutVehicleInputSchema;
