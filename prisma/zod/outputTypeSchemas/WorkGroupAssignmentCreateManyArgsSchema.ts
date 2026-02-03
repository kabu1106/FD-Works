import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupAssignmentCreateManyInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentCreateManyInputSchema'

export const WorkGroupAssignmentCreateManyArgsSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateManyArgs> = z.object({
  data: z.union([ WorkGroupAssignmentCreateManyInputSchema, WorkGroupAssignmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default WorkGroupAssignmentCreateManyArgsSchema;
