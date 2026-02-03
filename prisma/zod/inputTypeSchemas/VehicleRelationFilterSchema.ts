import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleWhereInputSchema } from './VehicleWhereInputSchema';

export const VehicleRelationFilterSchema: z.ZodType<Prisma.VehicleRelationFilter> = z.strictObject({
  is: z.lazy(() => VehicleWhereInputSchema).optional(),
  isNot: z.lazy(() => VehicleWhereInputSchema).optional(),
});

export default VehicleRelationFilterSchema;
