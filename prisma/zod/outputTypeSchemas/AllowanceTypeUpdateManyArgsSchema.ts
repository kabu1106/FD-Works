import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceTypeUpdateManyMutationInputSchema } from '../inputTypeSchemas/AllowanceTypeUpdateManyMutationInputSchema'
import { AllowanceTypeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AllowanceTypeUncheckedUpdateManyInputSchema'
import { AllowanceTypeWhereInputSchema } from '../inputTypeSchemas/AllowanceTypeWhereInputSchema'

export const AllowanceTypeUpdateManyArgsSchema: z.ZodType<Prisma.AllowanceTypeUpdateManyArgs> = z.object({
  data: z.union([ AllowanceTypeUpdateManyMutationInputSchema, AllowanceTypeUncheckedUpdateManyInputSchema ]),
  where: AllowanceTypeWhereInputSchema.optional(), 
}).strict();

export default AllowanceTypeUpdateManyArgsSchema;
