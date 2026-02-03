import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupSelectSchema } from '../inputTypeSchemas/WorkGroupSelectSchema';
import { WorkGroupIncludeSchema } from '../inputTypeSchemas/WorkGroupIncludeSchema';

export const WorkGroupArgsSchema: z.ZodType<Prisma.WorkGroupDefaultArgs> = z.object({
  select: z.lazy(() => WorkGroupSelectSchema).optional(),
  include: z.lazy(() => WorkGroupIncludeSchema).optional(),
}).strict();

export default WorkGroupArgsSchema;
