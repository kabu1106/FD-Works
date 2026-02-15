import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentReadModelCreateManyInputSchema: z.ZodType<Prisma.IncidentReadModelCreateManyInput> = z.strictObject({
  id: z.string(),
  dutyId: z.string(),
  locationId: z.number().int(),
  status: z.string(),
  occurredAt: z.coerce.date(),
  closedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
});

export default IncidentReadModelCreateManyInputSchema;
