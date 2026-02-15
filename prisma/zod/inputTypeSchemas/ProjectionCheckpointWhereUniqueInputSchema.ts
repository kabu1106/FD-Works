import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectionCheckpointWhereInputSchema } from './ProjectionCheckpointWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProjectionCheckpointWhereUniqueInputSchema: z.ZodType<Prisma.ProjectionCheckpointWhereUniqueInput> = z.object({
  projectionName: z.string(),
})
.and(z.strictObject({
  projectionName: z.string().optional(),
  AND: z.union([ z.lazy(() => ProjectionCheckpointWhereInputSchema), z.lazy(() => ProjectionCheckpointWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectionCheckpointWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectionCheckpointWhereInputSchema), z.lazy(() => ProjectionCheckpointWhereInputSchema).array() ]).optional(),
  lastEventId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  lastEventAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
}));

export default ProjectionCheckpointWhereUniqueInputSchema;
