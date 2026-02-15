import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProjectionCheckpointUpdateManyMutationInputSchema'
import { ProjectionCheckpointUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProjectionCheckpointUncheckedUpdateManyInputSchema'
import { ProjectionCheckpointWhereInputSchema } from '../inputTypeSchemas/ProjectionCheckpointWhereInputSchema'

export const ProjectionCheckpointUpdateManyArgsSchema: z.ZodType<Prisma.ProjectionCheckpointUpdateManyArgs> = z.object({
  data: z.union([ ProjectionCheckpointUpdateManyMutationInputSchema, ProjectionCheckpointUncheckedUpdateManyInputSchema ]),
  where: ProjectionCheckpointWhereInputSchema.optional(), 
}).strict();

export default ProjectionCheckpointUpdateManyArgsSchema;
