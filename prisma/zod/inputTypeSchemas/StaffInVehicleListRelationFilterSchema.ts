import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleWhereInputSchema } from './StaffInVehicleWhereInputSchema';

export const StaffInVehicleListRelationFilterSchema: z.ZodType<Prisma.StaffInVehicleListRelationFilter> = z.strictObject({
  every: z.lazy(() => StaffInVehicleWhereInputSchema).optional(),
  some: z.lazy(() => StaffInVehicleWhereInputSchema).optional(),
  none: z.lazy(() => StaffInVehicleWhereInputSchema).optional(),
});

export default StaffInVehicleListRelationFilterSchema;
