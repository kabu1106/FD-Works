import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ProjectionCheckpointScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectionCheckpointScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProjectionCheckpointScalarWhereWithAggregatesInputSchema), z.lazy(() => ProjectionCheckpointScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectionCheckpointScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectionCheckpointScalarWhereWithAggregatesInputSchema), z.lazy(() => ProjectionCheckpointScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  projectionName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  lastEventId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  lastEventAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default ProjectionCheckpointScalarWhereWithAggregatesInputSchema;
