import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleWhereInputSchema } from './VehicleWhereInputSchema';

export const VehicleListRelationFilterSchema: z.ZodType<Prisma.VehicleListRelationFilter> = z.strictObject({
  every: z.lazy(() => VehicleWhereInputSchema).optional(),
  some: z.lazy(() => VehicleWhereInputSchema).optional(),
  none: z.lazy(() => VehicleWhereInputSchema).optional(),
});

export default VehicleListRelationFilterSchema;
