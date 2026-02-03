import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveAssignmentWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentWhereInputSchema'

export const SpecialLeaveAssignmentDeleteManyArgsSchema: z.ZodType<Prisma.SpecialLeaveAssignmentDeleteManyArgs> = z.object({
  where: SpecialLeaveAssignmentWhereInputSchema.optional(), 
}).strict();

export default SpecialLeaveAssignmentDeleteManyArgsSchema;
