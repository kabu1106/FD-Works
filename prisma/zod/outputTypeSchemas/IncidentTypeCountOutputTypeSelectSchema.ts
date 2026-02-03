import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const IncidentTypeCountOutputTypeSelectSchema: z.ZodType<Prisma.IncidentTypeCountOutputTypeSelect> = z.object({
  Incident: z.boolean().optional(),
}).strict();

export default IncidentTypeCountOutputTypeSelectSchema;
