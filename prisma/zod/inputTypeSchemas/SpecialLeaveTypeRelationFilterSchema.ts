import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeWhereInputSchema } from './SpecialLeaveTypeWhereInputSchema';

export const SpecialLeaveTypeRelationFilterSchema: z.ZodType<Prisma.SpecialLeaveTypeRelationFilter> = z.strictObject({
  is: z.lazy(() => SpecialLeaveTypeWhereInputSchema).optional(),
  isNot: z.lazy(() => SpecialLeaveTypeWhereInputSchema).optional(),
});

export default SpecialLeaveTypeRelationFilterSchema;
