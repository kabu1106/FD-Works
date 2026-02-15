import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const OvertimeSummaryScalarWhereInputSchema: z.ZodType<Prisma.OvertimeSummaryScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSummaryScalarWhereInputSchema), z.lazy(() => OvertimeSummaryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSummaryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSummaryScalarWhereInputSchema), z.lazy(() => OvertimeSummaryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  calculationVersion: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  totalMinutes: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  isFinalized: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  calculatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default OvertimeSummaryScalarWhereInputSchema;
