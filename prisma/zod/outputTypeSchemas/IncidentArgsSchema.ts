import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentSelectSchema } from '../inputTypeSchemas/IncidentSelectSchema';
import { IncidentIncludeSchema } from '../inputTypeSchemas/IncidentIncludeSchema';

export const IncidentArgsSchema: z.ZodType<Prisma.IncidentDefaultArgs> = z.object({
  select: z.lazy(() => IncidentSelectSchema).optional(),
  include: z.lazy(() => IncidentIncludeSchema).optional(),
}).strict();

export default IncidentArgsSchema;
