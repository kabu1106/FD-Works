import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffEngagementUncheckedCreateInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  incidentId: z.string(),
  staffId: z.number().int(),
  engagedFrom: z.coerce.date(),
  engagedTo: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default IncidentStaffEngagementUncheckedCreateInputSchema;
