import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentReadModelUpdateWithoutVehiclesInputSchema } from './IncidentReadModelUpdateWithoutVehiclesInputSchema';
import { IncidentReadModelUncheckedUpdateWithoutVehiclesInputSchema } from './IncidentReadModelUncheckedUpdateWithoutVehiclesInputSchema';
import { IncidentReadModelCreateWithoutVehiclesInputSchema } from './IncidentReadModelCreateWithoutVehiclesInputSchema';
import { IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema } from './IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema';
import { IncidentReadModelWhereInputSchema } from './IncidentReadModelWhereInputSchema';

export const IncidentReadModelUpsertWithoutVehiclesInputSchema: z.ZodType<Prisma.IncidentReadModelUpsertWithoutVehiclesInput> = z.strictObject({
  update: z.union([ z.lazy(() => IncidentReadModelUpdateWithoutVehiclesInputSchema), z.lazy(() => IncidentReadModelUncheckedUpdateWithoutVehiclesInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentReadModelCreateWithoutVehiclesInputSchema), z.lazy(() => IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema) ]),
  where: z.lazy(() => IncidentReadModelWhereInputSchema).optional(),
});

export default IncidentReadModelUpsertWithoutVehiclesInputSchema;
