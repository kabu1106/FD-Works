import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentCreateManyDestinationInputSchema: z.ZodType<Prisma.IncidentCreateManyDestinationInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  categoryId: z.number().int(),
  typeId: z.number().int(),
  locationId: z.number().int(),
  destinationName: z.string().optional().nullable(),
  isDeleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default IncidentCreateManyDestinationInputSchema;
