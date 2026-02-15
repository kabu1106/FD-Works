import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectionCheckpointCreateInputSchema: z.ZodType<Prisma.ProjectionCheckpointCreateInput> = z.strictObject({
  projectionName: z.string(),
  lastEventId: z.string(),
  lastEventAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
});

export default ProjectionCheckpointCreateInputSchema;
