import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentCreateManyTypeInputSchema: z.ZodType<Prisma.IncidentCreateManyTypeInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  categoryId: z.number().int(),
  locationId: z.number().int(),
  destinationId: z.number().int().optional().nullable(),
  destinationName: z.string().optional().nullable(),
  isDeleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default IncidentCreateManyTypeInputSchema;
