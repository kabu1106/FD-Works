import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupWhereInputSchema } from './WorkGroupWhereInputSchema';

export const WorkGroupRelationFilterSchema: z.ZodType<Prisma.WorkGroupRelationFilter> = z.strictObject({
  is: z.lazy(() => WorkGroupWhereInputSchema).optional(),
  isNot: z.lazy(() => WorkGroupWhereInputSchema).optional(),
});

export default WorkGroupRelationFilterSchema;
