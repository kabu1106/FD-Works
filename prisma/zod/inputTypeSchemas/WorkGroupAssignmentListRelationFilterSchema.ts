import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentWhereInputSchema } from './WorkGroupAssignmentWhereInputSchema';

export const WorkGroupAssignmentListRelationFilterSchema: z.ZodType<Prisma.WorkGroupAssignmentListRelationFilter> = z.strictObject({
  every: z.lazy(() => WorkGroupAssignmentWhereInputSchema).optional(),
  some: z.lazy(() => WorkGroupAssignmentWhereInputSchema).optional(),
  none: z.lazy(() => WorkGroupAssignmentWhereInputSchema).optional(),
});

export default WorkGroupAssignmentListRelationFilterSchema;
