import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotWhereInputSchema } from '../inputTypeSchemas/OvertimeSlotWhereInputSchema'

export const OvertimeSlotDeleteManyArgsSchema: z.ZodType<Prisma.OvertimeSlotDeleteManyArgs> = z.object({
  where: OvertimeSlotWhereInputSchema.optional(), 
}).strict();

export default OvertimeSlotDeleteManyArgsSchema;
