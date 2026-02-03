import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const IncidentAllowanceSummaryScalarWhereInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema), z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema), z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  incidentStaffId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  allowanceTypeId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  version: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  count: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  isFinalized: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
});

export default IncidentAllowanceSummaryScalarWhereInputSchema;
