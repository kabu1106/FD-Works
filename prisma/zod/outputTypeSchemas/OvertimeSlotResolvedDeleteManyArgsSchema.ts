import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotResolvedWhereInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedWhereInputSchema'

export const OvertimeSlotResolvedDeleteManyArgsSchema: z.ZodType<Prisma.OvertimeSlotResolvedDeleteManyArgs> = z.object({
  where: OvertimeSlotResolvedWhereInputSchema.optional(), 
}).strict();

export default OvertimeSlotResolvedDeleteManyArgsSchema;
