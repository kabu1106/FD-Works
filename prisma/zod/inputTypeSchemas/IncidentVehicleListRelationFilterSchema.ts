import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleWhereInputSchema } from './IncidentVehicleWhereInputSchema';

export const IncidentVehicleListRelationFilterSchema: z.ZodType<Prisma.IncidentVehicleListRelationFilter> = z.strictObject({
  every: z.lazy(() => IncidentVehicleWhereInputSchema).optional(),
  some: z.lazy(() => IncidentVehicleWhereInputSchema).optional(),
  none: z.lazy(() => IncidentVehicleWhereInputSchema).optional(),
});

export default IncidentVehicleListRelationFilterSchema;
