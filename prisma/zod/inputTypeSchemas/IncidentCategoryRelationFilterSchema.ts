import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryWhereInputSchema } from './IncidentCategoryWhereInputSchema';

export const IncidentCategoryRelationFilterSchema: z.ZodType<Prisma.IncidentCategoryRelationFilter> = z.strictObject({
  is: z.lazy(() => IncidentCategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => IncidentCategoryWhereInputSchema).optional(),
});

export default IncidentCategoryRelationFilterSchema;
