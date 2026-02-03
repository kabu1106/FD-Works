import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const IncidentAllowanceSummaryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentAllowanceSummaryScalarWhereWithAggregatesInputSchema), z.lazy(() => IncidentAllowanceSummaryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentAllowanceSummaryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentAllowanceSummaryScalarWhereWithAggregatesInputSchema), z.lazy(() => IncidentAllowanceSummaryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  incidentStaffId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  allowanceTypeId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  version: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  count: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  isFinalized: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
});

export default IncidentAllowanceSummaryScalarWhereWithAggregatesInputSchema;
