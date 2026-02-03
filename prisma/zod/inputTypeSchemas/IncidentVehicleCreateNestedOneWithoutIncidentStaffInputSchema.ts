import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateWithoutIncidentStaffInputSchema } from './IncidentVehicleCreateWithoutIncidentStaffInputSchema';
import { IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema';
import { IncidentVehicleCreateOrConnectWithoutIncidentStaffInputSchema } from './IncidentVehicleCreateOrConnectWithoutIncidentStaffInputSchema';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';

export const IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentVehicleCreateNestedOneWithoutIncidentStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentVehicleCreateOrConnectWithoutIncidentStaffInputSchema).optional(),
  connect: z.lazy(() => IncidentVehicleWhereUniqueInputSchema).optional(),
});

export default IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema;
