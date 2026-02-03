import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffScalarWhereInputSchema } from './IncidentStaffScalarWhereInputSchema';
import { IncidentStaffUpdateManyMutationInputSchema } from './IncidentStaffUpdateManyMutationInputSchema';
import { IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleInputSchema } from './IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleInputSchema';

export const IncidentStaffUpdateManyWithWhereWithoutIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffUpdateManyWithWhereWithoutIncidentVehicleInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffUpdateManyMutationInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleInputSchema) ]),
});

export default IncidentStaffUpdateManyWithWhereWithoutIncidentVehicleInputSchema;
