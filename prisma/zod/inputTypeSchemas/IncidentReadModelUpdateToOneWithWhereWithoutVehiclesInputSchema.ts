import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentReadModelWhereInputSchema } from './IncidentReadModelWhereInputSchema';
import { IncidentReadModelUpdateWithoutVehiclesInputSchema } from './IncidentReadModelUpdateWithoutVehiclesInputSchema';
import { IncidentReadModelUncheckedUpdateWithoutVehiclesInputSchema } from './IncidentReadModelUncheckedUpdateWithoutVehiclesInputSchema';

export const IncidentReadModelUpdateToOneWithWhereWithoutVehiclesInputSchema: z.ZodType<Prisma.IncidentReadModelUpdateToOneWithWhereWithoutVehiclesInput> = z.strictObject({
  where: z.lazy(() => IncidentReadModelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IncidentReadModelUpdateWithoutVehiclesInputSchema), z.lazy(() => IncidentReadModelUncheckedUpdateWithoutVehiclesInputSchema) ]),
});

export default IncidentReadModelUpdateToOneWithWhereWithoutVehiclesInputSchema;
