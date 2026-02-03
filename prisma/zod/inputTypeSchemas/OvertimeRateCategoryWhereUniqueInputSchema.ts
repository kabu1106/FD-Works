import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { OvertimeSlotListRelationFilterSchema } from './OvertimeSlotListRelationFilterSchema';
import { OvertimeSummaryDetailListRelationFilterSchema } from './OvertimeSummaryDetailListRelationFilterSchema';

export const OvertimeRateCategoryWhereUniqueInputSchema: z.ZodType<Prisma.OvertimeRateCategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    code: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    code: z.string(),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => OvertimeRateCategoryWhereInputSchema), z.lazy(() => OvertimeRateCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeRateCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeRateCategoryWhereInputSchema), z.lazy(() => OvertimeRateCategoryWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  rate: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotListRelationFilterSchema).optional(),
  OvertimeSummaryDetail: z.lazy(() => OvertimeSummaryDetailListRelationFilterSchema).optional(),
}));

export default OvertimeRateCategoryWhereUniqueInputSchema;
