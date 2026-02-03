import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentUpdateWithoutVehiclesInputSchema } from './IncidentUpdateWithoutVehiclesInputSchema';
import { IncidentUncheckedUpdateWithoutVehiclesInputSchema } from './IncidentUncheckedUpdateWithoutVehiclesInputSchema';
import { IncidentCreateWithoutVehiclesInputSchema } from './IncidentCreateWithoutVehiclesInputSchema';
import { IncidentUncheckedCreateWithoutVehiclesInputSchema } from './IncidentUncheckedCreateWithoutVehiclesInputSchema';
import { IncidentWhereInputSchema } from './IncidentWhereInputSchema';

export const IncidentUpsertWithoutVehiclesInputSchema: z.ZodType<Prisma.IncidentUpsertWithoutVehiclesInput> = z.strictObject({
  update: z.union([ z.lazy(() => IncidentUpdateWithoutVehiclesInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutVehiclesInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentCreateWithoutVehiclesInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutVehiclesInputSchema) ]),
  where: z.lazy(() => IncidentWhereInputSchema).optional(),
});

export default IncidentUpsertWithoutVehiclesInputSchema;
