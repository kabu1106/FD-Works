import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointWhereInputSchema } from '../inputTypeSchemas/ProjectionCheckpointWhereInputSchema'
import { ProjectionCheckpointOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectionCheckpointOrderByWithRelationInputSchema'
import { ProjectionCheckpointWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectionCheckpointWhereUniqueInputSchema'
import { ProjectionCheckpointScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectionCheckpointScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectionCheckpointSelectSchema: z.ZodType<Prisma.ProjectionCheckpointSelect> = z.object({
  projectionName: z.boolean().optional(),
  lastEventId: z.boolean().optional(),
  lastEventAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const ProjectionCheckpointFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProjectionCheckpointFindFirstOrThrowArgs> = z.object({
  select: ProjectionCheckpointSelectSchema.optional(),
  where: ProjectionCheckpointWhereInputSchema.optional(), 
  orderBy: z.union([ ProjectionCheckpointOrderByWithRelationInputSchema.array(), ProjectionCheckpointOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectionCheckpointWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectionCheckpointScalarFieldEnumSchema, ProjectionCheckpointScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ProjectionCheckpointFindFirstOrThrowArgsSchema;
