import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeUpdateManyMutationInputSchema } from '../inputTypeSchemas/IncidentTypeUpdateManyMutationInputSchema'
import { IncidentTypeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IncidentTypeUncheckedUpdateManyInputSchema'
import { IncidentTypeWhereInputSchema } from '../inputTypeSchemas/IncidentTypeWhereInputSchema'

export const IncidentTypeUpdateManyArgsSchema: z.ZodType<Prisma.IncidentTypeUpdateManyArgs> = z.object({
  data: z.union([ IncidentTypeUpdateManyMutationInputSchema, IncidentTypeUncheckedUpdateManyInputSchema ]),
  where: IncidentTypeWhereInputSchema.optional(), 
}).strict();

export default IncidentTypeUpdateManyArgsSchema;
