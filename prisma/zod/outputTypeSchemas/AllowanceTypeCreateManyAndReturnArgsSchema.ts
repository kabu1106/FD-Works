import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceTypeCreateManyInputSchema } from '../inputTypeSchemas/AllowanceTypeCreateManyInputSchema'

export const AllowanceTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AllowanceTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ AllowanceTypeCreateManyInputSchema, AllowanceTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default AllowanceTypeCreateManyAndReturnArgsSchema;
