import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementWhereInputSchema } from './IncidentStaffEngagementWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IncidentRelationFilterSchema } from './IncidentRelationFilterSchema';
import { IncidentWhereInputSchema } from './IncidentWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const IncidentStaffEngagementWhereUniqueInputSchema: z.ZodType<Prisma.IncidentStaffEngagementWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => IncidentStaffEngagementWhereInputSchema), z.lazy(() => IncidentStaffEngagementWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentStaffEngagementWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentStaffEngagementWhereInputSchema), z.lazy(() => IncidentStaffEngagementWhereInputSchema).array() ]).optional(),
  incidentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  engagedFrom: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  engagedTo: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  incident: z.union([ z.lazy(() => IncidentRelationFilterSchema), z.lazy(() => IncidentWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
}));

export default IncidentStaffEngagementWhereUniqueInputSchema;
