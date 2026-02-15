import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectionCheckpointMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectionCheckpointMinOrderByAggregateInput> = z.strictObject({
  projectionName: z.lazy(() => SortOrderSchema).optional(),
  lastEventId: z.lazy(() => SortOrderSchema).optional(),
  lastEventAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default ProjectionCheckpointMinOrderByAggregateInputSchema;
