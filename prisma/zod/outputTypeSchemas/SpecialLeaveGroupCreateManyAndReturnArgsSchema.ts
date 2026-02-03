import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupCreateManyInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupCreateManyInputSchema'

export const SpecialLeaveGroupCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupCreateManyAndReturnArgs> = z.object({
  data: z.union([ SpecialLeaveGroupCreateManyInputSchema, SpecialLeaveGroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SpecialLeaveGroupCreateManyAndReturnArgsSchema;
