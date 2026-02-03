import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupCountOutputTypeSelectSchema } from './WorkGroupCountOutputTypeSelectSchema';

export const WorkGroupCountOutputTypeArgsSchema: z.ZodType<Prisma.WorkGroupCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => WorkGroupCountOutputTypeSelectSchema).nullish(),
}).strict();

export default WorkGroupCountOutputTypeSelectSchema;
