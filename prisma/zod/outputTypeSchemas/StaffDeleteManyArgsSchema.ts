import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffWhereInputSchema } from '../inputTypeSchemas/StaffWhereInputSchema'

export const StaffDeleteManyArgsSchema: z.ZodType<Prisma.StaffDeleteManyArgs> = z.object({
  where: StaffWhereInputSchema.optional(), 
}).strict();

export default StaffDeleteManyArgsSchema;
