import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleWhereInputSchema } from './VehicleWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IncidentVehicleListRelationFilterSchema } from './IncidentVehicleListRelationFilterSchema';
import { DepartmentNullableRelationFilterSchema } from './DepartmentNullableRelationFilterSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';

export const VehicleWhereUniqueInputSchema: z.ZodType<Prisma.VehicleWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    code: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    code: z.string(),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => VehicleWhereInputSchema), z.lazy(() => VehicleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VehicleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VehicleWhereInputSchema), z.lazy(() => VehicleWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  departmentId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  incidents: z.lazy(() => IncidentVehicleListRelationFilterSchema).optional(),
  department: z.union([ z.lazy(() => DepartmentNullableRelationFilterSchema), z.lazy(() => DepartmentWhereInputSchema) ]).optional().nullable(),
}));

export default VehicleWhereUniqueInputSchema;
