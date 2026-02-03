import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailOvertimeSummaryIdOvertimeRateCategoryIdCompoundUniqueInputSchema } from './OvertimeSummaryDetailOvertimeSummaryIdOvertimeRateCategoryIdCompoundUniqueInputSchema';
import { OvertimeSummaryDetailWhereInputSchema } from './OvertimeSummaryDetailWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { OvertimeSummaryRelationFilterSchema } from './OvertimeSummaryRelationFilterSchema';
import { OvertimeSummaryWhereInputSchema } from './OvertimeSummaryWhereInputSchema';
import { OvertimeRateCategoryRelationFilterSchema } from './OvertimeRateCategoryRelationFilterSchema';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';

export const OvertimeSummaryDetailWhereUniqueInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    overtimeSummaryId_overtimeRateCategoryId: z.lazy(() => OvertimeSummaryDetailOvertimeSummaryIdOvertimeRateCategoryIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    overtimeSummaryId_overtimeRateCategoryId: z.lazy(() => OvertimeSummaryDetailOvertimeSummaryIdOvertimeRateCategoryIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  overtimeSummaryId_overtimeRateCategoryId: z.lazy(() => OvertimeSummaryDetailOvertimeSummaryIdOvertimeRateCategoryIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OvertimeSummaryDetailWhereInputSchema), z.lazy(() => OvertimeSummaryDetailWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSummaryDetailWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSummaryDetailWhereInputSchema), z.lazy(() => OvertimeSummaryDetailWhereInputSchema).array() ]).optional(),
  overtimeSummaryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  rateSnapshot: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  minutes: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  overtimeSummary: z.union([ z.lazy(() => OvertimeSummaryRelationFilterSchema), z.lazy(() => OvertimeSummaryWhereInputSchema) ]).optional(),
  rateCategory: z.union([ z.lazy(() => OvertimeRateCategoryRelationFilterSchema), z.lazy(() => OvertimeRateCategoryWhereInputSchema) ]).optional(),
}));

export default OvertimeSummaryDetailWhereUniqueInputSchema;
