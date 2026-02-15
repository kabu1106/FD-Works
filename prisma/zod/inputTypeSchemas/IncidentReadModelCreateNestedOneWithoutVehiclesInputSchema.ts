import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentReadModelCreateWithoutVehiclesInputSchema } from './IncidentReadModelCreateWithoutVehiclesInputSchema';
import { IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema } from './IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema';
import { IncidentReadModelCreateOrConnectWithoutVehiclesInputSchema } from './IncidentReadModelCreateOrConnectWithoutVehiclesInputSchema';
import { IncidentReadModelWhereUniqueInputSchema } from './IncidentReadModelWhereUniqueInputSchema';

export const IncidentReadModelCreateNestedOneWithoutVehiclesInputSchema: z.ZodType<Prisma.IncidentReadModelCreateNestedOneWithoutVehiclesInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentReadModelCreateWithoutVehiclesInputSchema), z.lazy(() => IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentReadModelCreateOrConnectWithoutVehiclesInputSchema).optional(),
  connect: z.lazy(() => IncidentReadModelWhereUniqueInputSchema).optional(),
});

export default IncidentReadModelCreateNestedOneWithoutVehiclesInputSchema;
