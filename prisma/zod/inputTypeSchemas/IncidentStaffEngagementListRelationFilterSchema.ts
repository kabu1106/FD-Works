import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementWhereInputSchema } from './IncidentStaffEngagementWhereInputSchema';

export const IncidentStaffEngagementListRelationFilterSchema: z.ZodType<Prisma.IncidentStaffEngagementListRelationFilter> = z.strictObject({
  every: z.lazy(() => IncidentStaffEngagementWhereInputSchema).optional(),
  some: z.lazy(() => IncidentStaffEngagementWhereInputSchema).optional(),
  none: z.lazy(() => IncidentStaffEngagementWhereInputSchema).optional(),
});

export default IncidentStaffEngagementListRelationFilterSchema;
