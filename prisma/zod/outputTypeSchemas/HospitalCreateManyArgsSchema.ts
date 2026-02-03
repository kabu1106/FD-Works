import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HospitalCreateManyInputSchema } from '../inputTypeSchemas/HospitalCreateManyInputSchema'

export const HospitalCreateManyArgsSchema: z.ZodType<Prisma.HospitalCreateManyArgs> = z.object({
  data: z.union([ HospitalCreateManyInputSchema, HospitalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default HospitalCreateManyArgsSchema;
