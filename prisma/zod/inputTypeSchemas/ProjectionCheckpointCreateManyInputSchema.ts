import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectionCheckpointCreateManyInputSchema: z.ZodType<Prisma.ProjectionCheckpointCreateManyInput> = z.strictObject({
  projectionName: z.string(),
  lastEventId: z.string(),
  lastEventAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
});

export default ProjectionCheckpointCreateManyInputSchema;
