import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectionCheckpointWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectionCheckpointWhereUniqueInputSchema'
import { ProjectionCheckpointCreateInputSchema } from '../inputTypeSchemas/ProjectionCheckpointCreateInputSchema'
import { ProjectionCheckpointUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectionCheckpointUncheckedCreateInputSchema'
import { ProjectionCheckpointUpdateInputSchema } from '../inputTypeSchemas/ProjectionCheckpointUpdateInputSchema'
import { ProjectionCheckpointUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectionCheckpointUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectionCheckpointSelectSchema: z.ZodType<Prisma.ProjectionCheckpointSelect> = z.object({
  projectionName: z.boolean().optional(),
  lastEventId: z.boolean().optional(),
  lastEventAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const ProjectionCheckpointUpsertArgsSchema: z.ZodType<Prisma.ProjectionCheckpointUpsertArgs> = z.object({
  select: ProjectionCheckpointSelectSchema.optional(),
  where: ProjectionCheckpointWhereUniqueInputSchema, 
  create: z.union([ ProjectionCheckpointCreateInputSchema, ProjectionCheckpointUncheckedCreateInputSchema ]),
  update: z.union([ ProjectionCheckpointUpdateInputSchema, ProjectionCheckpointUncheckedUpdateInputSchema ]),
}).strict();

export default ProjectionCheckpointUpsertArgsSchema;
