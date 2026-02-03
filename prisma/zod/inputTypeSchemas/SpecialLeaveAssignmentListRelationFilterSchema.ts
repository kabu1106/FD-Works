import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentWhereInputSchema } from './SpecialLeaveAssignmentWhereInputSchema';

export const SpecialLeaveAssignmentListRelationFilterSchema: z.ZodType<Prisma.SpecialLeaveAssignmentListRelationFilter> = z.strictObject({
  every: z.lazy(() => SpecialLeaveAssignmentWhereInputSchema).optional(),
  some: z.lazy(() => SpecialLeaveAssignmentWhereInputSchema).optional(),
  none: z.lazy(() => SpecialLeaveAssignmentWhereInputSchema).optional(),
});

export default SpecialLeaveAssignmentListRelationFilterSchema;
