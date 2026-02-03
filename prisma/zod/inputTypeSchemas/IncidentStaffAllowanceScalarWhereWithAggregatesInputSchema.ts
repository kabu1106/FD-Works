import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const IncidentStaffAllowanceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentStaffAllowanceScalarWhereWithAggregatesInputSchema), z.lazy(() => IncidentStaffAllowanceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentStaffAllowanceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentStaffAllowanceScalarWhereWithAggregatesInputSchema), z.lazy(() => IncidentStaffAllowanceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  incidentStaffId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  allowanceTypeId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
});

export default IncidentStaffAllowanceScalarWhereWithAggregatesInputSchema;
