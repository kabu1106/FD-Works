import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentCreateManyLocationInputSchema: z.ZodType<Prisma.IncidentCreateManyLocationInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  categoryId: z.number().int(),
  typeId: z.number().int(),
  destinationId: z.number().int().optional().nullable(),
  destinationName: z.string().optional().nullable(),
  isDeleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default IncidentCreateManyLocationInputSchema;
