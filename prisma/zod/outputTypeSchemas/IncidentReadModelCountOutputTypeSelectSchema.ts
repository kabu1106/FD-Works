import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const IncidentReadModelCountOutputTypeSelectSchema: z.ZodType<Prisma.IncidentReadModelCountOutputTypeSelect> = z.object({
  vehicles: z.boolean().optional(),
}).strict();

export default IncidentReadModelCountOutputTypeSelectSchema;
