import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeCountOutputTypeSelectSchema } from './IncidentTypeCountOutputTypeSelectSchema';

export const IncidentTypeCountOutputTypeArgsSchema: z.ZodType<Prisma.IncidentTypeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => IncidentTypeCountOutputTypeSelectSchema).nullish(),
}).strict();

export default IncidentTypeCountOutputTypeSelectSchema;
