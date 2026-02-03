import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffCreateWithoutIncidentVehicleInputSchema } from './IncidentStaffCreateWithoutIncidentVehicleInputSchema';
import { IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema } from './IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema';

export const IncidentStaffCreateOrConnectWithoutIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffCreateOrConnectWithoutIncidentVehicleInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema) ]),
});

export default IncidentStaffCreateOrConnectWithoutIncidentVehicleInputSchema;
