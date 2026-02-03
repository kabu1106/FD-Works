import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';

export const OvertimeSummaryDetailScalarWhereInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema), z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema), z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  overtimeSummaryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  rateSnapshot: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  minutes: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
});

export default OvertimeSummaryDetailScalarWhereInputSchema;
