import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { OvertimeSlotListRelationFilterSchema } from './OvertimeSlotListRelationFilterSchema';
import { OvertimeSummaryDetailListRelationFilterSchema } from './OvertimeSummaryDetailListRelationFilterSchema';

export const OvertimeRateCategoryWhereInputSchema: z.ZodType<Prisma.OvertimeRateCategoryWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeRateCategoryWhereInputSchema), z.lazy(() => OvertimeRateCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeRateCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeRateCategoryWhereInputSchema), z.lazy(() => OvertimeRateCategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  rate: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotListRelationFilterSchema).optional(),
  OvertimeSummaryDetail: z.lazy(() => OvertimeSummaryDetailListRelationFilterSchema).optional(),
});

export default OvertimeRateCategoryWhereInputSchema;
