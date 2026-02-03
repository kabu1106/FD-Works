import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereInputSchema } from './IncidentWhereInputSchema';
import { IncidentUpdateWithoutVehiclesInputSchema } from './IncidentUpdateWithoutVehiclesInputSchema';
import { IncidentUncheckedUpdateWithoutVehiclesInputSchema } from './IncidentUncheckedUpdateWithoutVehiclesInputSchema';

export const IncidentUpdateToOneWithWhereWithoutVehiclesInputSchema: z.ZodType<Prisma.IncidentUpdateToOneWithWhereWithoutVehiclesInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IncidentUpdateWithoutVehiclesInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutVehiclesInputSchema) ]),
});

export default IncidentUpdateToOneWithWhereWithoutVehiclesInputSchema;
