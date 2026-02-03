import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveAssignmentCreateManyInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentCreateManyInputSchema'

export const SpecialLeaveAssignmentCreateManyArgsSchema: z.ZodType<Prisma.SpecialLeaveAssignmentCreateManyArgs> = z.object({
  data: z.union([ SpecialLeaveAssignmentCreateManyInputSchema, SpecialLeaveAssignmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SpecialLeaveAssignmentCreateManyArgsSchema;
