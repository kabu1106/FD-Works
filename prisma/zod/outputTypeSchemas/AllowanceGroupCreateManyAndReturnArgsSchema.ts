import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupCreateManyInputSchema } from '../inputTypeSchemas/AllowanceGroupCreateManyInputSchema'

export const AllowanceGroupCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AllowanceGroupCreateManyAndReturnArgs> = z.object({
  data: z.union([ AllowanceGroupCreateManyInputSchema, AllowanceGroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default AllowanceGroupCreateManyAndReturnArgsSchema;
