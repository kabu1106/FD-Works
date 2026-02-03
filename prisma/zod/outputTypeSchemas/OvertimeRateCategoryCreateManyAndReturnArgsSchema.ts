import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeRateCategoryCreateManyInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryCreateManyInputSchema'

export const OvertimeRateCategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OvertimeRateCategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ OvertimeRateCategoryCreateManyInputSchema, OvertimeRateCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OvertimeRateCategoryCreateManyAndReturnArgsSchema;
