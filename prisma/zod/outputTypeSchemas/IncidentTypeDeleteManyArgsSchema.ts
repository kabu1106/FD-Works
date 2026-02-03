import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeWhereInputSchema } from '../inputTypeSchemas/IncidentTypeWhereInputSchema'

export const IncidentTypeDeleteManyArgsSchema: z.ZodType<Prisma.IncidentTypeDeleteManyArgs> = z.object({
  where: IncidentTypeWhereInputSchema.optional(), 
}).strict();

export default IncidentTypeDeleteManyArgsSchema;
