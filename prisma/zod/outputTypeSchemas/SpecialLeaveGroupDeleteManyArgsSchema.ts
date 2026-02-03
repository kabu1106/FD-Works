import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupWhereInputSchema'

export const SpecialLeaveGroupDeleteManyArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupDeleteManyArgs> = z.object({
  where: SpecialLeaveGroupWhereInputSchema.optional(), 
}).strict();

export default SpecialLeaveGroupDeleteManyArgsSchema;
