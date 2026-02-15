import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentReadModelWhereInputSchema } from '../inputTypeSchemas/IncidentReadModelWhereInputSchema'

export const IncidentReadModelDeleteManyArgsSchema: z.ZodType<Prisma.IncidentReadModelDeleteManyArgs> = z.object({
  where: IncidentReadModelWhereInputSchema.optional(), 
}).strict();

export default IncidentReadModelDeleteManyArgsSchema;
