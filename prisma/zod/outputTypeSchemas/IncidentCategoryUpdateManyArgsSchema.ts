import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/IncidentCategoryUpdateManyMutationInputSchema'
import { IncidentCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IncidentCategoryUncheckedUpdateManyInputSchema'
import { IncidentCategoryWhereInputSchema } from '../inputTypeSchemas/IncidentCategoryWhereInputSchema'

export const IncidentCategoryUpdateManyArgsSchema: z.ZodType<Prisma.IncidentCategoryUpdateManyArgs> = z.object({
  data: z.union([ IncidentCategoryUpdateManyMutationInputSchema, IncidentCategoryUncheckedUpdateManyInputSchema ]),
  where: IncidentCategoryWhereInputSchema.optional(), 
}).strict();

export default IncidentCategoryUpdateManyArgsSchema;
