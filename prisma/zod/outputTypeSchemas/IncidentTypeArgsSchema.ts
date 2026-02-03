import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeSelectSchema } from '../inputTypeSchemas/IncidentTypeSelectSchema';
import { IncidentTypeIncludeSchema } from '../inputTypeSchemas/IncidentTypeIncludeSchema';

export const IncidentTypeArgsSchema: z.ZodType<Prisma.IncidentTypeDefaultArgs> = z.object({
  select: z.lazy(() => IncidentTypeSelectSchema).optional(),
  include: z.lazy(() => IncidentTypeIncludeSchema).optional(),
}).strict();

export default IncidentTypeArgsSchema;
