import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupAssignmentSelectSchema } from '../inputTypeSchemas/WorkGroupAssignmentSelectSchema';
import { WorkGroupAssignmentIncludeSchema } from '../inputTypeSchemas/WorkGroupAssignmentIncludeSchema';

export const WorkGroupAssignmentArgsSchema: z.ZodType<Prisma.WorkGroupAssignmentDefaultArgs> = z.object({
  select: z.lazy(() => WorkGroupAssignmentSelectSchema).optional(),
  include: z.lazy(() => WorkGroupAssignmentIncludeSchema).optional(),
}).strict();

export default WorkGroupAssignmentArgsSchema;
