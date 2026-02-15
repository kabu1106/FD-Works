import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const IncidentStaffEngagementScalarWhereInputSchema: z.ZodType<Prisma.IncidentStaffEngagementScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema), z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema), z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  incidentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  engagedFrom: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  engagedTo: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default IncidentStaffEngagementScalarWhereInputSchema;
