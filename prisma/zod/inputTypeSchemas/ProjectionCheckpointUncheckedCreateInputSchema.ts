import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectionCheckpointUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectionCheckpointUncheckedCreateInput> = z.strictObject({
  projectionName: z.string(),
  lastEventId: z.string(),
  lastEventAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
});

export default ProjectionCheckpointUncheckedCreateInputSchema;
