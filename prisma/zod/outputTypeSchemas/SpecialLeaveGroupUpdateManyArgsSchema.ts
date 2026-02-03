import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupUpdateManyMutationInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupUpdateManyMutationInputSchema'
import { SpecialLeaveGroupUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupUncheckedUpdateManyInputSchema'
import { SpecialLeaveGroupWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupWhereInputSchema'

export const SpecialLeaveGroupUpdateManyArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupUpdateManyArgs> = z.object({
  data: z.union([ SpecialLeaveGroupUpdateManyMutationInputSchema, SpecialLeaveGroupUncheckedUpdateManyInputSchema ]),
  where: SpecialLeaveGroupWhereInputSchema.optional(), 
}).strict();

export default SpecialLeaveGroupUpdateManyArgsSchema;
