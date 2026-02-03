import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftDayWhereInputSchema } from './WorkShiftDayWhereInputSchema';

export const WorkShiftDayListRelationFilterSchema: z.ZodType<Prisma.WorkShiftDayListRelationFilter> = z.strictObject({
  every: z.lazy(() => WorkShiftDayWhereInputSchema).optional(),
  some: z.lazy(() => WorkShiftDayWhereInputSchema).optional(),
  none: z.lazy(() => WorkShiftDayWhereInputSchema).optional(),
});

export default WorkShiftDayListRelationFilterSchema;
