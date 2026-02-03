import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeCreateManyInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeCreateManyInputSchema'

export const SpecialLeaveTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ SpecialLeaveTypeCreateManyInputSchema, SpecialLeaveTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SpecialLeaveTypeCreateManyAndReturnArgsSchema;
