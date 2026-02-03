import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffNullableRelationFilterSchema: z.ZodType<Prisma.StaffNullableRelationFilter> = z.strictObject({
  is: z.lazy(() => StaffWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => StaffWhereInputSchema).optional().nullable(),
});

export default StaffNullableRelationFilterSchema;
