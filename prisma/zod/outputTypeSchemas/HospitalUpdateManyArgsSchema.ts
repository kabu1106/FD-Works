import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HospitalUpdateManyMutationInputSchema } from '../inputTypeSchemas/HospitalUpdateManyMutationInputSchema'
import { HospitalUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/HospitalUncheckedUpdateManyInputSchema'
import { HospitalWhereInputSchema } from '../inputTypeSchemas/HospitalWhereInputSchema'

export const HospitalUpdateManyArgsSchema: z.ZodType<Prisma.HospitalUpdateManyArgs> = z.object({
  data: z.union([ HospitalUpdateManyMutationInputSchema, HospitalUncheckedUpdateManyInputSchema ]),
  where: HospitalWhereInputSchema.optional(), 
}).strict();

export default HospitalUpdateManyArgsSchema;
