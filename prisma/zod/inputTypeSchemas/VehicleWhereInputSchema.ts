import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IncidentVehicleListRelationFilterSchema } from './IncidentVehicleListRelationFilterSchema';
import { DepartmentNullableRelationFilterSchema } from './DepartmentNullableRelationFilterSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';

export const VehicleWhereInputSchema: z.ZodType<Prisma.VehicleWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VehicleWhereInputSchema), z.lazy(() => VehicleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VehicleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VehicleWhereInputSchema), z.lazy(() => VehicleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  departmentId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  incidents: z.lazy(() => IncidentVehicleListRelationFilterSchema).optional(),
  department: z.union([ z.lazy(() => DepartmentNullableRelationFilterSchema), z.lazy(() => DepartmentWhereInputSchema) ]).optional().nullable(),
});

export default VehicleWhereInputSchema;
