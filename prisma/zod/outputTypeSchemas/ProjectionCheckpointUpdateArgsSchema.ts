import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointUpdateInputSchema } from '../inputTypeSchemas/ProjectionCheckpointUpdateInputSchema'
import { ProjectionCheckpointUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectionCheckpointUncheckedUpdateInputSchema'
import { ProjectionCheckpointWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectionCheckpointWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectionCheckpointSelectSchema: z.ZodType<Prisma.ProjectionCheckpointSelect> = z.object({
  projectionName: z.boolean().optional(),
  lastEventId: z.boolean().optional(),
  lastEventAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const ProjectionCheckpointUpdateArgsSchema: z.ZodType<Prisma.ProjectionCheckpointUpdateArgs> = z.object({
  select: ProjectionCheckpointSelectSchema.optional(),
  data: z.union([ ProjectionCheckpointUpdateInputSchema, ProjectionCheckpointUncheckedUpdateInputSchema ]),
  where: ProjectionCheckpointWhereUniqueInputSchema, 
}).strict();

export default ProjectionCheckpointUpdateArgsSchema;
