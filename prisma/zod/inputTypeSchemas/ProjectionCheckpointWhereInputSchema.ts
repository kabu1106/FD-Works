import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProjectionCheckpointWhereInputSchema: z.ZodType<Prisma.ProjectionCheckpointWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProjectionCheckpointWhereInputSchema), z.lazy(() => ProjectionCheckpointWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectionCheckpointWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectionCheckpointWhereInputSchema), z.lazy(() => ProjectionCheckpointWhereInputSchema).array() ]).optional(),
  projectionName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  lastEventId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  lastEventAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default ProjectionCheckpointWhereInputSchema;
