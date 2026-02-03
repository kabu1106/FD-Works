import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentWhereInputSchema } from '../inputTypeSchemas/IncidentWhereInputSchema'

export const IncidentDeleteManyArgsSchema: z.ZodType<Prisma.IncidentDeleteManyArgs> = z.object({
  where: IncidentWhereInputSchema.optional(), 
}).strict();

export default IncidentDeleteManyArgsSchema;
