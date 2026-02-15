import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointCreateInputSchema } from '../inputTypeSchemas/ProjectionCheckpointCreateInputSchema'
import { ProjectionCheckpointUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectionCheckpointUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectionCheckpointSelectSchema: z.ZodType<Prisma.ProjectionCheckpointSelect> = z.object({
  projectionName: z.boolean().optional(),
  lastEventId: z.boolean().optional(),
  lastEventAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const ProjectionCheckpointCreateArgsSchema: z.ZodType<Prisma.ProjectionCheckpointCreateArgs> = z.object({
  select: ProjectionCheckpointSelectSchema.optional(),
  data: z.union([ ProjectionCheckpointCreateInputSchema, ProjectionCheckpointUncheckedCreateInputSchema ]),
}).strict();

export default ProjectionCheckpointCreateArgsSchema;
