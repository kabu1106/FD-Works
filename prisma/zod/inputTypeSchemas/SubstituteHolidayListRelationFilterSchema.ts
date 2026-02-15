import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubstituteHolidayWhereInputSchema } from './SubstituteHolidayWhereInputSchema';

export const SubstituteHolidayListRelationFilterSchema: z.ZodType<Prisma.SubstituteHolidayListRelationFilter> = z.strictObject({
  every: z.lazy(() => SubstituteHolidayWhereInputSchema).optional(),
  some: z.lazy(() => SubstituteHolidayWhereInputSchema).optional(),
  none: z.lazy(() => SubstituteHolidayWhereInputSchema).optional(),
});

export default SubstituteHolidayListRelationFilterSchema;
