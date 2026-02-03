import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCountOutputTypeSelectSchema } from './IncidentCountOutputTypeSelectSchema';

export const IncidentCountOutputTypeArgsSchema: z.ZodType<Prisma.IncidentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => IncidentCountOutputTypeSelectSchema).nullish(),
}).strict();

export default IncidentCountOutputTypeSelectSchema;
