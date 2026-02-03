import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffCreateManyInputSchema } from '../inputTypeSchemas/StaffCreateManyInputSchema'

export const StaffCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StaffCreateManyAndReturnArgs> = z.object({
  data: z.union([ StaffCreateManyInputSchema, StaffCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default StaffCreateManyAndReturnArgsSchema;
