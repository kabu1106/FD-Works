import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentReadModelCountOutputTypeSelectSchema } from './IncidentReadModelCountOutputTypeSelectSchema';

export const IncidentReadModelCountOutputTypeArgsSchema: z.ZodType<Prisma.IncidentReadModelCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => IncidentReadModelCountOutputTypeSelectSchema).nullish(),
}).strict();

export default IncidentReadModelCountOutputTypeSelectSchema;
