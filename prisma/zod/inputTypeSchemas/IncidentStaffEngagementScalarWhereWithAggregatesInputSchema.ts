import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const IncidentStaffEngagementScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.IncidentStaffEngagementScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentStaffEngagementScalarWhereWithAggregatesInputSchema), z.lazy(() => IncidentStaffEngagementScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentStaffEngagementScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentStaffEngagementScalarWhereWithAggregatesInputSchema), z.lazy(() => IncidentStaffEngagementScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  incidentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  engagedFrom: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  engagedTo: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default IncidentStaffEngagementScalarWhereWithAggregatesInputSchema;
