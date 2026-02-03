import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeUpdateManyMutationInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeUpdateManyMutationInputSchema'
import { SpecialLeaveTypeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeUncheckedUpdateManyInputSchema'
import { SpecialLeaveTypeWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeWhereInputSchema'

export const SpecialLeaveTypeUpdateManyArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeUpdateManyArgs> = z.object({
  data: z.union([ SpecialLeaveTypeUpdateManyMutationInputSchema, SpecialLeaveTypeUncheckedUpdateManyInputSchema ]),
  where: SpecialLeaveTypeWhereInputSchema.optional(), 
}).strict();

export default SpecialLeaveTypeUpdateManyArgsSchema;
