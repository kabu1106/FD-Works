import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const VehicleScalarWhereInputSchema: z.ZodType<Prisma.VehicleScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VehicleScalarWhereInputSchema), z.lazy(() => VehicleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VehicleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VehicleScalarWhereInputSchema), z.lazy(() => VehicleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  departmentId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
});

export default VehicleScalarWhereInputSchema;
