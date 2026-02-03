import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotCreateManyInputSchema } from '../inputTypeSchemas/OvertimeSlotCreateManyInputSchema'

export const OvertimeSlotCreateManyArgsSchema: z.ZodType<Prisma.OvertimeSlotCreateManyArgs> = z.object({
  data: z.union([ OvertimeSlotCreateManyInputSchema, OvertimeSlotCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OvertimeSlotCreateManyArgsSchema;
