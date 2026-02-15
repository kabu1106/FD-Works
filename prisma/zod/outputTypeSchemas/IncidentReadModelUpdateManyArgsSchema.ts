import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentReadModelUpdateManyMutationInputSchema } from '../inputTypeSchemas/IncidentReadModelUpdateManyMutationInputSchema'
import { IncidentReadModelUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IncidentReadModelUncheckedUpdateManyInputSchema'
import { IncidentReadModelWhereInputSchema } from '../inputTypeSchemas/IncidentReadModelWhereInputSchema'

export const IncidentReadModelUpdateManyArgsSchema: z.ZodType<Prisma.IncidentReadModelUpdateManyArgs> = z.object({
  data: z.union([ IncidentReadModelUpdateManyMutationInputSchema, IncidentReadModelUncheckedUpdateManyInputSchema ]),
  where: IncidentReadModelWhereInputSchema.optional(), 
}).strict();

export default IncidentReadModelUpdateManyArgsSchema;
