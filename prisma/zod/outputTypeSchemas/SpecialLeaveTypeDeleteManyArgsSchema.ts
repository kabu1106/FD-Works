import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeWhereInputSchema'

export const SpecialLeaveTypeDeleteManyArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeDeleteManyArgs> = z.object({
  where: SpecialLeaveTypeWhereInputSchema.optional(), 
}).strict();

export default SpecialLeaveTypeDeleteManyArgsSchema;
