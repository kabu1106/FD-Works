import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateWithoutIncidentInputSchema } from './IncidentVehicleCreateWithoutIncidentInputSchema';
import { IncidentVehicleUncheckedCreateWithoutIncidentInputSchema } from './IncidentVehicleUncheckedCreateWithoutIncidentInputSchema';
import { IncidentVehicleCreateOrConnectWithoutIncidentInputSchema } from './IncidentVehicleCreateOrConnectWithoutIncidentInputSchema';
import { IncidentVehicleCreateManyIncidentInputEnvelopeSchema } from './IncidentVehicleCreateManyIncidentInputEnvelopeSchema';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';

export const IncidentVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentVehicleUncheckedCreateNestedManyWithoutIncidentInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleCreateWithoutIncidentInputSchema).array(), z.lazy(() => IncidentVehicleUncheckedCreateWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutIncidentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentVehicleCreateOrConnectWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleCreateOrConnectWithoutIncidentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentVehicleCreateManyIncidentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentVehicleWhereUniqueInputSchema), z.lazy(() => IncidentVehicleWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema;
