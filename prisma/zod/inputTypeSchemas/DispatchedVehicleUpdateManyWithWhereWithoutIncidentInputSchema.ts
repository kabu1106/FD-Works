import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleScalarWhereInputSchema } from './DispatchedVehicleScalarWhereInputSchema';
import { DispatchedVehicleUpdateManyMutationInputSchema } from './DispatchedVehicleUpdateManyMutationInputSchema';
import { DispatchedVehicleUncheckedUpdateManyWithoutIncidentInputSchema } from './DispatchedVehicleUncheckedUpdateManyWithoutIncidentInputSchema';

export const DispatchedVehicleUpdateManyWithWhereWithoutIncidentInputSchema: z.ZodType<Prisma.DispatchedVehicleUpdateManyWithWhereWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => DispatchedVehicleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DispatchedVehicleUpdateManyMutationInputSchema), z.lazy(() => DispatchedVehicleUncheckedUpdateManyWithoutIncidentInputSchema) ]),
});

export default DispatchedVehicleUpdateManyWithWhereWithoutIncidentInputSchema;
