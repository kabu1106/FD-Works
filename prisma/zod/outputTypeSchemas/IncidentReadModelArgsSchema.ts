import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentReadModelSelectSchema } from '../inputTypeSchemas/IncidentReadModelSelectSchema';
import { IncidentReadModelIncludeSchema } from '../inputTypeSchemas/IncidentReadModelIncludeSchema';

export const IncidentReadModelArgsSchema: z.ZodType<Prisma.IncidentReadModelDefaultArgs> = z.object({
  select: z.lazy(() => IncidentReadModelSelectSchema).optional(),
  include: z.lazy(() => IncidentReadModelIncludeSchema).optional(),
}).strict();

export default IncidentReadModelArgsSchema;
