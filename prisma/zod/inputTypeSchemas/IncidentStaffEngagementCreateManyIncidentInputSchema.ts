import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffEngagementCreateManyIncidentInputSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateManyIncidentInput> = z.strictObject({
  id: z.string().optional(),
  staffId: z.number().int(),
  engagedFrom: z.coerce.date(),
  engagedTo: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default IncidentStaffEngagementCreateManyIncidentInputSchema;
