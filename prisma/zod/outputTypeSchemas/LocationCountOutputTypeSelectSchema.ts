import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LocationCountOutputTypeSelectSchema: z.ZodType<Prisma.LocationCountOutputTypeSelect> = z.object({
  children: z.boolean().optional(),
  incidents: z.boolean().optional(),
}).strict();

export default LocationCountOutputTypeSelectSchema;
