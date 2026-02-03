import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';
import { IncidentVehicleCreateWithoutIncidentStaffInputSchema } from './IncidentVehicleCreateWithoutIncidentStaffInputSchema';
import { IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema';

export const IncidentVehicleCreateOrConnectWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentVehicleCreateOrConnectWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentVehicleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema) ]),
});

export default IncidentVehicleCreateOrConnectWithoutIncidentStaffInputSchema;
