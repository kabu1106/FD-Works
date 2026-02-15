import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStatusSchema } from './IncidentStatusSchema';

export const IncidentCreateManyCategoryInputSchema: z.ZodType<Prisma.IncidentCreateManyCategoryInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  typeId: z.number().int(),
  locationId: z.number().int(),
  destinationId: z.number().int().optional().nullable(),
  destinationName: z.string().optional().nullable(),
  occurredAt: z.coerce.date(),
  status: z.lazy(() => IncidentStatusSchema),
  isDeleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default IncidentCreateManyCategoryInputSchema;
