import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleWhereInputSchema } from './DispatchedVehicleWhereInputSchema';

export const DispatchedVehicleRelationFilterSchema: z.ZodType<Prisma.DispatchedVehicleRelationFilter> = z.strictObject({
  is: z.lazy(() => DispatchedVehicleWhereInputSchema).optional(),
  isNot: z.lazy(() => DispatchedVehicleWhereInputSchema).optional(),
});

export default DispatchedVehicleRelationFilterSchema;
