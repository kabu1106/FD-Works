import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleScalarWhereInputSchema } from './IncidentVehicleScalarWhereInputSchema';
import { IncidentVehicleUpdateManyMutationInputSchema } from './IncidentVehicleUpdateManyMutationInputSchema';
import { IncidentVehicleUncheckedUpdateManyWithoutIncidentInputSchema } from './IncidentVehicleUncheckedUpdateManyWithoutIncidentInputSchema';

export const IncidentVehicleUpdateManyWithWhereWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentVehicleUpdateManyWithWhereWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentVehicleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentVehicleUpdateManyMutationInputSchema), z.lazy(() => IncidentVehicleUncheckedUpdateManyWithoutIncidentInputSchema) ]),
});

export default IncidentVehicleUpdateManyWithWhereWithoutIncidentInputSchema;
