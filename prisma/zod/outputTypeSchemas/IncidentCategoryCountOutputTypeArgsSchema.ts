import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCategoryCountOutputTypeSelectSchema } from './IncidentCategoryCountOutputTypeSelectSchema';

export const IncidentCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.IncidentCategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => IncidentCategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default IncidentCategoryCountOutputTypeSelectSchema;
