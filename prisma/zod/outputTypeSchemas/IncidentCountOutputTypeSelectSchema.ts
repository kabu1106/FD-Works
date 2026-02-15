import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const IncidentCountOutputTypeSelectSchema: z.ZodType<Prisma.IncidentCountOutputTypeSelect> = z.object({
  vehicles: z.boolean().optional(),
  incidentStaffEngagements: z.boolean().optional(),
}).strict();

export default IncidentCountOutputTypeSelectSchema;
