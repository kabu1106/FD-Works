import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleWhereInputSchema } from './DispatchedVehicleWhereInputSchema';

export const DispatchedVehicleListRelationFilterSchema: z.ZodType<Prisma.DispatchedVehicleListRelationFilter> = z.strictObject({
  every: z.lazy(() => DispatchedVehicleWhereInputSchema).optional(),
  some: z.lazy(() => DispatchedVehicleWhereInputSchema).optional(),
  none: z.lazy(() => DispatchedVehicleWhereInputSchema).optional(),
});

export default DispatchedVehicleListRelationFilterSchema;
