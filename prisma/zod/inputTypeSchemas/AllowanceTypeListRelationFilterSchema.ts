import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';

export const AllowanceTypeListRelationFilterSchema: z.ZodType<Prisma.AllowanceTypeListRelationFilter> = z.strictObject({
  every: z.lazy(() => AllowanceTypeWhereInputSchema).optional(),
  some: z.lazy(() => AllowanceTypeWhereInputSchema).optional(),
  none: z.lazy(() => AllowanceTypeWhereInputSchema).optional(),
});

export default AllowanceTypeListRelationFilterSchema;
