import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleCreateWithoutIncidentInputSchema } from './DispatchedVehicleCreateWithoutIncidentInputSchema';
import { DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema } from './DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema';
import { DispatchedVehicleCreateOrConnectWithoutIncidentInputSchema } from './DispatchedVehicleCreateOrConnectWithoutIncidentInputSchema';
import { DispatchedVehicleCreateManyIncidentInputEnvelopeSchema } from './DispatchedVehicleCreateManyIncidentInputEnvelopeSchema';
import { DispatchedVehicleWhereUniqueInputSchema } from './DispatchedVehicleWhereUniqueInputSchema';

export const DispatchedVehicleCreateNestedManyWithoutIncidentInputSchema: z.ZodType<Prisma.DispatchedVehicleCreateNestedManyWithoutIncidentInput> = z.strictObject({
  create: z.union([ z.lazy(() => DispatchedVehicleCreateWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleCreateWithoutIncidentInputSchema).array(), z.lazy(() => DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DispatchedVehicleCreateOrConnectWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleCreateOrConnectWithoutIncidentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DispatchedVehicleCreateManyIncidentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DispatchedVehicleWhereUniqueInputSchema), z.lazy(() => DispatchedVehicleWhereUniqueInputSchema).array() ]).optional(),
});

export default DispatchedVehicleCreateNestedManyWithoutIncidentInputSchema;
