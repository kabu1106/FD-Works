import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointWhereInputSchema } from '../inputTypeSchemas/ProjectionCheckpointWhereInputSchema'
import { ProjectionCheckpointOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectionCheckpointOrderByWithRelationInputSchema'
import { ProjectionCheckpointWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectionCheckpointWhereUniqueInputSchema'

export const ProjectionCheckpointAggregateArgsSchema: z.ZodType<Prisma.ProjectionCheckpointAggregateArgs> = z.object({
  where: ProjectionCheckpointWhereInputSchema.optional(), 
  orderBy: z.union([ ProjectionCheckpointOrderByWithRelationInputSchema.array(), ProjectionCheckpointOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectionCheckpointWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProjectionCheckpointAggregateArgsSchema;
