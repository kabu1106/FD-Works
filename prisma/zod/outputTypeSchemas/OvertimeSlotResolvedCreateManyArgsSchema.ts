import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotResolvedCreateManyInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedCreateManyInputSchema'

export const OvertimeSlotResolvedCreateManyArgsSchema: z.ZodType<Prisma.OvertimeSlotResolvedCreateManyArgs> = z.object({
  data: z.union([ OvertimeSlotResolvedCreateManyInputSchema, OvertimeSlotResolvedCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OvertimeSlotResolvedCreateManyArgsSchema;
