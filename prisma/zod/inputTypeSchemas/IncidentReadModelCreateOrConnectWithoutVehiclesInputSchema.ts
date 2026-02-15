import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentReadModelWhereUniqueInputSchema } from './IncidentReadModelWhereUniqueInputSchema';
import { IncidentReadModelCreateWithoutVehiclesInputSchema } from './IncidentReadModelCreateWithoutVehiclesInputSchema';
import { IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema } from './IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema';

export const IncidentReadModelCreateOrConnectWithoutVehiclesInputSchema: z.ZodType<Prisma.IncidentReadModelCreateOrConnectWithoutVehiclesInput> = z.strictObject({
  where: z.lazy(() => IncidentReadModelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentReadModelCreateWithoutVehiclesInputSchema), z.lazy(() => IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema) ]),
});

export default IncidentReadModelCreateOrConnectWithoutVehiclesInputSchema;
