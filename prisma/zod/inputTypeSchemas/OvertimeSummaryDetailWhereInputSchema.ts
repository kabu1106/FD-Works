import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { OvertimeSummaryRelationFilterSchema } from './OvertimeSummaryRelationFilterSchema';
import { OvertimeSummaryWhereInputSchema } from './OvertimeSummaryWhereInputSchema';
import { OvertimeRateCategoryRelationFilterSchema } from './OvertimeRateCategoryRelationFilterSchema';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';

export const OvertimeSummaryDetailWhereInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSummaryDetailWhereInputSchema), z.lazy(() => OvertimeSummaryDetailWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSummaryDetailWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSummaryDetailWhereInputSchema), z.lazy(() => OvertimeSummaryDetailWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  overtimeSummaryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  rateSnapshot: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  minutes: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  overtimeSummary: z.union([ z.lazy(() => OvertimeSummaryRelationFilterSchema), z.lazy(() => OvertimeSummaryWhereInputSchema) ]).optional(),
  rateCategory: z.union([ z.lazy(() => OvertimeRateCategoryRelationFilterSchema), z.lazy(() => OvertimeRateCategoryWhereInputSchema) ]).optional(),
});

export default OvertimeSummaryDetailWhereInputSchema;
