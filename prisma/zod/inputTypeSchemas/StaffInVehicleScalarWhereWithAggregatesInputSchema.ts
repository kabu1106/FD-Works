import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const StaffInVehicleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StaffInVehicleScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => StaffInVehicleScalarWhereWithAggregatesInputSchema), z.lazy(() => StaffInVehicleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StaffInVehicleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StaffInVehicleScalarWhereWithAggregatesInputSchema), z.lazy(() => StaffInVehicleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  dispatchedVehicleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  staffId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
});

export default StaffInVehicleScalarWhereWithAggregatesInputSchema;
