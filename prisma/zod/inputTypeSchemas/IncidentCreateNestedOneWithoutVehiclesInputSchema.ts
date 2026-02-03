import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutVehiclesInputSchema } from './IncidentCreateWithoutVehiclesInputSchema';
import { IncidentUncheckedCreateWithoutVehiclesInputSchema } from './IncidentUncheckedCreateWithoutVehiclesInputSchema';
import { IncidentCreateOrConnectWithoutVehiclesInputSchema } from './IncidentCreateOrConnectWithoutVehiclesInputSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';

export const IncidentCreateNestedOneWithoutVehiclesInputSchema: z.ZodType<Prisma.IncidentCreateNestedOneWithoutVehiclesInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutVehiclesInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutVehiclesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentCreateOrConnectWithoutVehiclesInputSchema).optional(),
  connect: z.lazy(() => IncidentWhereUniqueInputSchema).optional(),
});

export default IncidentCreateNestedOneWithoutVehiclesInputSchema;
