import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';

export const AllowanceTypeRelationFilterSchema: z.ZodType<Prisma.AllowanceTypeRelationFilter> = z.strictObject({
  is: z.lazy(() => AllowanceTypeWhereInputSchema).optional(),
  isNot: z.lazy(() => AllowanceTypeWhereInputSchema).optional(),
});

export default AllowanceTypeRelationFilterSchema;
