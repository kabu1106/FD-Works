import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyUpdateManyMutationInputSchema } from '../inputTypeSchemas/DutyUpdateManyMutationInputSchema'
import { DutyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DutyUncheckedUpdateManyInputSchema'
import { DutyWhereInputSchema } from '../inputTypeSchemas/DutyWhereInputSchema'

export const DutyUpdateManyArgsSchema: z.ZodType<Prisma.DutyUpdateManyArgs> = z.object({
  data: z.union([ DutyUpdateManyMutationInputSchema, DutyUncheckedUpdateManyInputSchema ]),
  where: DutyWhereInputSchema.optional(), 
}).strict();

export default DutyUpdateManyArgsSchema;
