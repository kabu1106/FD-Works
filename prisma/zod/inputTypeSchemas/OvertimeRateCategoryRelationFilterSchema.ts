import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';

export const OvertimeRateCategoryRelationFilterSchema: z.ZodType<Prisma.OvertimeRateCategoryRelationFilter> = z.strictObject({
  is: z.lazy(() => OvertimeRateCategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => OvertimeRateCategoryWhereInputSchema).optional(),
});

export default OvertimeRateCategoryRelationFilterSchema;
