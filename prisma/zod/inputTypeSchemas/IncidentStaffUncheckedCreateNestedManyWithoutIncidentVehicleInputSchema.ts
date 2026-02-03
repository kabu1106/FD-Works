import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateWithoutIncidentVehicleInputSchema } from './IncidentStaffCreateWithoutIncidentVehicleInputSchema';
import { IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema } from './IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema';
import { IncidentStaffCreateOrConnectWithoutIncidentVehicleInputSchema } from './IncidentStaffCreateOrConnectWithoutIncidentVehicleInputSchema';
import { IncidentStaffCreateManyIncidentVehicleInputEnvelopeSchema } from './IncidentStaffCreateManyIncidentVehicleInputEnvelopeSchema';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';

export const IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffCreateWithoutIncidentVehicleInputSchema).array(), z.lazy(() => IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffCreateOrConnectWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffCreateOrConnectWithoutIncidentVehicleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffCreateManyIncidentVehicleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffWhereUniqueInputSchema), z.lazy(() => IncidentStaffWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema;
