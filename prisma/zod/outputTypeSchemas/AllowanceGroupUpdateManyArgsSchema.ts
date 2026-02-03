import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupUpdateManyMutationInputSchema } from '../inputTypeSchemas/AllowanceGroupUpdateManyMutationInputSchema'
import { AllowanceGroupUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AllowanceGroupUncheckedUpdateManyInputSchema'
import { AllowanceGroupWhereInputSchema } from '../inputTypeSchemas/AllowanceGroupWhereInputSchema'

export const AllowanceGroupUpdateManyArgsSchema: z.ZodType<Prisma.AllowanceGroupUpdateManyArgs> = z.object({
  data: z.union([ AllowanceGroupUpdateManyMutationInputSchema, AllowanceGroupUncheckedUpdateManyInputSchema ]),
  where: AllowanceGroupWhereInputSchema.optional(), 
}).strict();

export default AllowanceGroupUpdateManyArgsSchema;
