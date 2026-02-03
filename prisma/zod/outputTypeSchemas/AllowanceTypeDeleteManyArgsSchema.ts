import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceTypeWhereInputSchema } from '../inputTypeSchemas/AllowanceTypeWhereInputSchema'

export const AllowanceTypeDeleteManyArgsSchema: z.ZodType<Prisma.AllowanceTypeDeleteManyArgs> = z.object({
  where: AllowanceTypeWhereInputSchema.optional(), 
}).strict();

export default AllowanceTypeDeleteManyArgsSchema;
