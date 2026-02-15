import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const StaffInVehicleScalarWhereInputSchema: z.ZodType<Prisma.StaffInVehicleScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => StaffInVehicleScalarWhereInputSchema), z.lazy(() => StaffInVehicleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StaffInVehicleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StaffInVehicleScalarWhereInputSchema), z.lazy(() => StaffInVehicleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  dispatchedVehicleId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
});

export default StaffInVehicleScalarWhereInputSchema;
