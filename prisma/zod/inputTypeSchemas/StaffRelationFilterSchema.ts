import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffRelationFilterSchema: z.ZodType<Prisma.StaffRelationFilter> = z.strictObject({
  is: z.lazy(() => StaffWhereInputSchema).optional(),
  isNot: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffRelationFilterSchema;
