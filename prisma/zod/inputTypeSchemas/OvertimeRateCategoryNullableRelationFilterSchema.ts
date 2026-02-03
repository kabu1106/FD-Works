import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';

export const OvertimeRateCategoryNullableRelationFilterSchema: z.ZodType<Prisma.OvertimeRateCategoryNullableRelationFilter> = z.strictObject({
  is: z.lazy(() => OvertimeRateCategoryWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => OvertimeRateCategoryWhereInputSchema).optional().nullable(),
});

export default OvertimeRateCategoryNullableRelationFilterSchema;
