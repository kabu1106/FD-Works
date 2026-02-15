import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointWhereInputSchema } from '../inputTypeSchemas/ProjectionCheckpointWhereInputSchema'
import { ProjectionCheckpointOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProjectionCheckpointOrderByWithAggregationInputSchema'
import { ProjectionCheckpointScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectionCheckpointScalarFieldEnumSchema'
import { ProjectionCheckpointScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProjectionCheckpointScalarWhereWithAggregatesInputSchema'

export const ProjectionCheckpointGroupByArgsSchema: z.ZodType<Prisma.ProjectionCheckpointGroupByArgs> = z.object({
  where: ProjectionCheckpointWhereInputSchema.optional(), 
  orderBy: z.union([ ProjectionCheckpointOrderByWithAggregationInputSchema.array(), ProjectionCheckpointOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectionCheckpointScalarFieldEnumSchema.array(), 
  having: ProjectionCheckpointScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProjectionCheckpointGroupByArgsSchema;
