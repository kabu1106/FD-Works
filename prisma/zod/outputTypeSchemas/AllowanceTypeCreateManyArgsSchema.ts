import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceTypeCreateManyInputSchema } from '../inputTypeSchemas/AllowanceTypeCreateManyInputSchema'

export const AllowanceTypeCreateManyArgsSchema: z.ZodType<Prisma.AllowanceTypeCreateManyArgs> = z.object({
  data: z.union([ AllowanceTypeCreateManyInputSchema, AllowanceTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default AllowanceTypeCreateManyArgsSchema;
