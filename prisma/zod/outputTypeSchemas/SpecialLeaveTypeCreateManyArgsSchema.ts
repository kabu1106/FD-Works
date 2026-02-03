import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeCreateManyInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeCreateManyInputSchema'

export const SpecialLeaveTypeCreateManyArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateManyArgs> = z.object({
  data: z.union([ SpecialLeaveTypeCreateManyInputSchema, SpecialLeaveTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SpecialLeaveTypeCreateManyArgsSchema;
