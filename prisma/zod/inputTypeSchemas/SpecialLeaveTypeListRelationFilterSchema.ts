import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeWhereInputSchema } from './SpecialLeaveTypeWhereInputSchema';

export const SpecialLeaveTypeListRelationFilterSchema: z.ZodType<Prisma.SpecialLeaveTypeListRelationFilter> = z.strictObject({
  every: z.lazy(() => SpecialLeaveTypeWhereInputSchema).optional(),
  some: z.lazy(() => SpecialLeaveTypeWhereInputSchema).optional(),
  none: z.lazy(() => SpecialLeaveTypeWhereInputSchema).optional(),
});

export default SpecialLeaveTypeListRelationFilterSchema;
