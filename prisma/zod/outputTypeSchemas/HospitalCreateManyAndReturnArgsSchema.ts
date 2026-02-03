import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HospitalCreateManyInputSchema } from '../inputTypeSchemas/HospitalCreateManyInputSchema'

export const HospitalCreateManyAndReturnArgsSchema: z.ZodType<Prisma.HospitalCreateManyAndReturnArgs> = z.object({
  data: z.union([ HospitalCreateManyInputSchema, HospitalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default HospitalCreateManyAndReturnArgsSchema;
