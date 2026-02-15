import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointWhereInputSchema } from '../inputTypeSchemas/ProjectionCheckpointWhereInputSchema'

export const ProjectionCheckpointDeleteManyArgsSchema: z.ZodType<Prisma.ProjectionCheckpointDeleteManyArgs> = z.object({
  where: ProjectionCheckpointWhereInputSchema.optional(), 
}).strict();

export default ProjectionCheckpointDeleteManyArgsSchema;
