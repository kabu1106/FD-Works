import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const IncidentCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.IncidentCategoryCountOutputTypeSelect> = z.object({
  types: z.boolean().optional(),
  Incident: z.boolean().optional(),
}).strict();

export default IncidentCategoryCountOutputTypeSelectSchema;
