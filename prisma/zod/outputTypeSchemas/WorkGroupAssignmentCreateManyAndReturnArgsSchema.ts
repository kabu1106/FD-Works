import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupAssignmentCreateManyInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentCreateManyInputSchema'

export const WorkGroupAssignmentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateManyAndReturnArgs> = z.object({
  data: z.union([ WorkGroupAssignmentCreateManyInputSchema, WorkGroupAssignmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default WorkGroupAssignmentCreateManyAndReturnArgsSchema;
