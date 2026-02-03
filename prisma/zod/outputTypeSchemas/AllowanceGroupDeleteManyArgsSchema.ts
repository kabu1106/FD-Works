import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupWhereInputSchema } from '../inputTypeSchemas/AllowanceGroupWhereInputSchema'

export const AllowanceGroupDeleteManyArgsSchema: z.ZodType<Prisma.AllowanceGroupDeleteManyArgs> = z.object({
  where: AllowanceGroupWhereInputSchema.optional(), 
}).strict();

export default AllowanceGroupDeleteManyArgsSchema;
