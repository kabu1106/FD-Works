import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleScalarWhereInputSchema } from './IncidentVehicleScalarWhereInputSchema';
import { IncidentVehicleUpdateManyMutationInputSchema } from './IncidentVehicleUpdateManyMutationInputSchema';
import { IncidentVehicleUncheckedUpdateManyWithoutVehicleInputSchema } from './IncidentVehicleUncheckedUpdateManyWithoutVehicleInputSchema';

export const IncidentVehicleUpdateManyWithWhereWithoutVehicleInputSchema: z.ZodType<Prisma.IncidentVehicleUpdateManyWithWhereWithoutVehicleInput> = z.strictObject({
  where: z.lazy(() => IncidentVehicleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentVehicleUpdateManyMutationInputSchema), z.lazy(() => IncidentVehicleUncheckedUpdateManyWithoutVehicleInputSchema) ]),
});

export default IncidentVehicleUpdateManyWithWhereWithoutVehicleInputSchema;
