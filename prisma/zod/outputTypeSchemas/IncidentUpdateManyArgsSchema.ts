import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentUpdateManyMutationInputSchema } from '../inputTypeSchemas/IncidentUpdateManyMutationInputSchema'
import { IncidentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IncidentUncheckedUpdateManyInputSchema'
import { IncidentWhereInputSchema } from '../inputTypeSchemas/IncidentWhereInputSchema'

export const IncidentUpdateManyArgsSchema: z.ZodType<Prisma.IncidentUpdateManyArgs> = z.object({
  data: z.union([ IncidentUpdateManyMutationInputSchema, IncidentUncheckedUpdateManyInputSchema ]),
  where: IncidentWhereInputSchema.optional(), 
}).strict();

export default IncidentUpdateManyArgsSchema;
