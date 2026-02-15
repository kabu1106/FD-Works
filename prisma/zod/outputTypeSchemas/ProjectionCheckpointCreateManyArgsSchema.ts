import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointCreateManyInputSchema } from '../inputTypeSchemas/ProjectionCheckpointCreateManyInputSchema'

export const ProjectionCheckpointCreateManyArgsSchema: z.ZodType<Prisma.ProjectionCheckpointCreateManyArgs> = z.object({
  data: z.union([ ProjectionCheckpointCreateManyInputSchema, ProjectionCheckpointCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProjectionCheckpointCreateManyArgsSchema;
