import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectionCheckpointOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectionCheckpointOrderByWithRelationInput> = z.strictObject({
  projectionName: z.lazy(() => SortOrderSchema).optional(),
  lastEventId: z.lazy(() => SortOrderSchema).optional(),
  lastEventAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default ProjectionCheckpointOrderByWithRelationInputSchema;
