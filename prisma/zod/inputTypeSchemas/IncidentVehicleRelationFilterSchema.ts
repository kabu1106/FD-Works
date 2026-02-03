import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleWhereInputSchema } from './IncidentVehicleWhereInputSchema';

export const IncidentVehicleRelationFilterSchema: z.ZodType<Prisma.IncidentVehicleRelationFilter> = z.strictObject({
  is: z.lazy(() => IncidentVehicleWhereInputSchema).optional(),
  isNot: z.lazy(() => IncidentVehicleWhereInputSchema).optional(),
});

export default IncidentVehicleRelationFilterSchema;
