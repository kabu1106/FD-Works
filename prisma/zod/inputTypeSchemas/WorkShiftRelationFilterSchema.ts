import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftWhereInputSchema } from './WorkShiftWhereInputSchema';

export const WorkShiftRelationFilterSchema: z.ZodType<Prisma.WorkShiftRelationFilter> = z.strictObject({
  is: z.lazy(() => WorkShiftWhereInputSchema).optional(),
  isNot: z.lazy(() => WorkShiftWhereInputSchema).optional(),
});

export default WorkShiftRelationFilterSchema;
