import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DispatchedVehicleRelationFilterSchema } from './DispatchedVehicleRelationFilterSchema';
import { DispatchedVehicleWhereInputSchema } from './DispatchedVehicleWhereInputSchema';

export const StaffInVehicleWhereInputSchema: z.ZodType<Prisma.StaffInVehicleWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => StaffInVehicleWhereInputSchema), z.lazy(() => StaffInVehicleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StaffInVehicleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StaffInVehicleWhereInputSchema), z.lazy(() => StaffInVehicleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  dispatchedVehicleId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  vehicle: z.union([ z.lazy(() => DispatchedVehicleRelationFilterSchema), z.lazy(() => DispatchedVehicleWhereInputSchema) ]).optional(),
});

export default StaffInVehicleWhereInputSchema;
