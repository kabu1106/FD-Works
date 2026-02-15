import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectionCheckpointWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectionCheckpointSelectSchema: z.ZodType<Prisma.ProjectionCheckpointSelect> = z.object({
  projectionName: z.boolean().optional(),
  lastEventId: z.boolean().optional(),
  lastEventAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const ProjectionCheckpointDeleteArgsSchema: z.ZodType<Prisma.ProjectionCheckpointDeleteArgs> = z.object({
  select: ProjectionCheckpointSelectSchema.optional(),
  where: ProjectionCheckpointWhereUniqueInputSchema, 
}).strict();

export default ProjectionCheckpointDeleteArgsSchema;
