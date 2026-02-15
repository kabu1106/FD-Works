import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleDispatchedVehicleIdStaffIdCompoundUniqueInputSchema } from './StaffInVehicleDispatchedVehicleIdStaffIdCompoundUniqueInputSchema';
import { StaffInVehicleWhereInputSchema } from './StaffInVehicleWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DispatchedVehicleRelationFilterSchema } from './DispatchedVehicleRelationFilterSchema';
import { DispatchedVehicleWhereInputSchema } from './DispatchedVehicleWhereInputSchema';

export const StaffInVehicleWhereUniqueInputSchema: z.ZodType<Prisma.StaffInVehicleWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    dispatchedVehicleId_staffId: z.lazy(() => StaffInVehicleDispatchedVehicleIdStaffIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    dispatchedVehicleId_staffId: z.lazy(() => StaffInVehicleDispatchedVehicleIdStaffIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  dispatchedVehicleId_staffId: z.lazy(() => StaffInVehicleDispatchedVehicleIdStaffIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => StaffInVehicleWhereInputSchema), z.lazy(() => StaffInVehicleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StaffInVehicleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StaffInVehicleWhereInputSchema), z.lazy(() => StaffInVehicleWhereInputSchema).array() ]).optional(),
  dispatchedVehicleId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  vehicle: z.union([ z.lazy(() => DispatchedVehicleRelationFilterSchema), z.lazy(() => DispatchedVehicleWhereInputSchema) ]).optional(),
}));

export default StaffInVehicleWhereUniqueInputSchema;
