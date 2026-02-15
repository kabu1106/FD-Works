import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUncheckedCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  incidentId: z.string(),
  engagedFrom: z.coerce.date(),
  engagedTo: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema;
