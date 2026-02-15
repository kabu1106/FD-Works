import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffEngagementCreateManyInputSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  incidentId: z.string(),
  staffId: z.number().int(),
  engagedFrom: z.coerce.date(),
  engagedTo: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default IncidentStaffEngagementCreateManyInputSchema;
