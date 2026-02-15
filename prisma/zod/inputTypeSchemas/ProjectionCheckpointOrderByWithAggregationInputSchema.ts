import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectionCheckpointCountOrderByAggregateInputSchema } from './ProjectionCheckpointCountOrderByAggregateInputSchema';
import { ProjectionCheckpointMaxOrderByAggregateInputSchema } from './ProjectionCheckpointMaxOrderByAggregateInputSchema';
import { ProjectionCheckpointMinOrderByAggregateInputSchema } from './ProjectionCheckpointMinOrderByAggregateInputSchema';

export const ProjectionCheckpointOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectionCheckpointOrderByWithAggregationInput> = z.strictObject({
  projectionName: z.lazy(() => SortOrderSchema).optional(),
  lastEventId: z.lazy(() => SortOrderSchema).optional(),
  lastEventAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectionCheckpointCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectionCheckpointMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectionCheckpointMinOrderByAggregateInputSchema).optional(),
});

export default ProjectionCheckpointOrderByWithAggregationInputSchema;
