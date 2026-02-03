import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';

export const DepartmentNullableRelationFilterSchema: z.ZodType<Prisma.DepartmentNullableRelationFilter> = z.strictObject({
  is: z.lazy(() => DepartmentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => DepartmentWhereInputSchema).optional().nullable(),
});

export default DepartmentNullableRelationFilterSchema;
