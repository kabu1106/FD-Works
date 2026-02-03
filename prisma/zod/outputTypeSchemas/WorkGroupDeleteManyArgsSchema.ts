import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupWhereInputSchema } from '../inputTypeSchemas/WorkGroupWhereInputSchema'

export const WorkGroupDeleteManyArgsSchema: z.ZodType<Prisma.WorkGroupDeleteManyArgs> = z.object({
  where: WorkGroupWhereInputSchema.optional(), 
}).strict();

export default WorkGroupDeleteManyArgsSchema;
