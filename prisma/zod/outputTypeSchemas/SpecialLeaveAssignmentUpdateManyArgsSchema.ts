import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveAssignmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentUpdateManyMutationInputSchema'
import { SpecialLeaveAssignmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentUncheckedUpdateManyInputSchema'
import { SpecialLeaveAssignmentWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentWhereInputSchema'

export const SpecialLeaveAssignmentUpdateManyArgsSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpdateManyArgs> = z.object({
  data: z.union([ SpecialLeaveAssignmentUpdateManyMutationInputSchema, SpecialLeaveAssignmentUncheckedUpdateManyInputSchema ]),
  where: SpecialLeaveAssignmentWhereInputSchema.optional(), 
}).strict();

export default SpecialLeaveAssignmentUpdateManyArgsSchema;
