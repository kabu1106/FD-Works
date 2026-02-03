import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCategoryWhereInputSchema } from '../inputTypeSchemas/IncidentCategoryWhereInputSchema'

export const IncidentCategoryDeleteManyArgsSchema: z.ZodType<Prisma.IncidentCategoryDeleteManyArgs> = z.object({
  where: IncidentCategoryWhereInputSchema.optional(), 
}).strict();

export default IncidentCategoryDeleteManyArgsSchema;
