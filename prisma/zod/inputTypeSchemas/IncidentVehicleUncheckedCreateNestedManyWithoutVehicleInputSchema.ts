import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateWithoutVehicleInputSchema } from './IncidentVehicleCreateWithoutVehicleInputSchema';
import { IncidentVehicleUncheckedCreateWithoutVehicleInputSchema } from './IncidentVehicleUncheckedCreateWithoutVehicleInputSchema';
import { IncidentVehicleCreateOrConnectWithoutVehicleInputSchema } from './IncidentVehicleCreateOrConnectWithoutVehicleInputSchema';
import { IncidentVehicleCreateManyVehicleInputEnvelopeSchema } from './IncidentVehicleCreateManyVehicleInputEnvelopeSchema';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';

export const IncidentVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema: z.ZodType<Prisma.IncidentVehicleUncheckedCreateNestedManyWithoutVehicleInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleCreateWithoutVehicleInputSchema).array(), z.lazy(() => IncidentVehicleUncheckedCreateWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutVehicleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentVehicleCreateOrConnectWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleCreateOrConnectWithoutVehicleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentVehicleCreateManyVehicleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentVehicleWhereUniqueInputSchema), z.lazy(() => IncidentVehicleWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema;
