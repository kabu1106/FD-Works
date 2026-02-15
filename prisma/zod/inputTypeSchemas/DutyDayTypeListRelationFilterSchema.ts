import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeWhereInputSchema } from './DutyDayTypeWhereInputSchema';

export const DutyDayTypeListRelationFilterSchema: z.ZodType<Prisma.DutyDayTypeListRelationFilter> = z.strictObject({
  every: z.lazy(() => DutyDayTypeWhereInputSchema).optional(),
  some: z.lazy(() => DutyDayTypeWhereInputSchema).optional(),
  none: z.lazy(() => DutyDayTypeWhereInputSchema).optional(),
});

export default DutyDayTypeListRelationFilterSchema;
