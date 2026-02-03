import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HospitalWhereInputSchema } from '../inputTypeSchemas/HospitalWhereInputSchema'

export const HospitalDeleteManyArgsSchema: z.ZodType<Prisma.HospitalDeleteManyArgs> = z.object({
  where: HospitalWhereInputSchema.optional(), 
}).strict();

export default HospitalDeleteManyArgsSchema;
