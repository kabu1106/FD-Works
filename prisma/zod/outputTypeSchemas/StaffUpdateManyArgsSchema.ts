import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffUpdateManyMutationInputSchema } from '../inputTypeSchemas/StaffUpdateManyMutationInputSchema'
import { StaffUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StaffUncheckedUpdateManyInputSchema'
import { StaffWhereInputSchema } from '../inputTypeSchemas/StaffWhereInputSchema'

export const StaffUpdateManyArgsSchema: z.ZodType<Prisma.StaffUpdateManyArgs> = z.object({
  data: z.union([ StaffUpdateManyMutationInputSchema, StaffUncheckedUpdateManyInputSchema ]),
  where: StaffWhereInputSchema.optional(), 
}).strict();

export default StaffUpdateManyArgsSchema;
