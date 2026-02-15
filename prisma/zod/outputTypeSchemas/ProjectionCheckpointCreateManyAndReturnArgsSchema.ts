import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointCreateManyInputSchema } from '../inputTypeSchemas/ProjectionCheckpointCreateManyInputSchema'

export const ProjectionCheckpointCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectionCheckpointCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProjectionCheckpointCreateManyInputSchema, ProjectionCheckpointCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProjectionCheckpointCreateManyAndReturnArgsSchema;
