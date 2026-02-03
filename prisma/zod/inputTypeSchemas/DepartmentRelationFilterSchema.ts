import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';

export const DepartmentRelationFilterSchema: z.ZodType<Prisma.DepartmentRelationFilter> = z.strictObject({
  is: z.lazy(() => DepartmentWhereInputSchema).optional(),
  isNot: z.lazy(() => DepartmentWhereInputSchema).optional(),
});

export default DepartmentRelationFilterSchema;
