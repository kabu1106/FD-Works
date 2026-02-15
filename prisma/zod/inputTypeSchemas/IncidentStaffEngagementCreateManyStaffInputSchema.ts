import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffEngagementCreateManyStaffInputSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateManyStaffInput> = z.strictObject({
  id: z.string().optional(),
  incidentId: z.string(),
  engagedFrom: z.coerce.date(),
  engagedTo: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default IncidentStaffEngagementCreateManyStaffInputSchema;
