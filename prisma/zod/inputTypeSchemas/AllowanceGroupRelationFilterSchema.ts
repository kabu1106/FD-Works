import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceGroupWhereInputSchema } from './AllowanceGroupWhereInputSchema';

export const AllowanceGroupRelationFilterSchema: z.ZodType<Prisma.AllowanceGroupRelationFilter> = z.strictObject({
  is: z.lazy(() => AllowanceGroupWhereInputSchema).optional(),
  isNot: z.lazy(() => AllowanceGroupWhereInputSchema).optional(),
});

export default AllowanceGroupRelationFilterSchema;
