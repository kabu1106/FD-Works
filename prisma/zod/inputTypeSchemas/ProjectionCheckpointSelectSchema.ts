import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ProjectionCheckpointSelectSchema: z.ZodType<Prisma.ProjectionCheckpointSelect> = z.object({
  projectionName: z.boolean().optional(),
  lastEventId: z.boolean().optional(),
  lastEventAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export default ProjectionCheckpointSelectSchema;
