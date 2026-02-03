import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereInputSchema } from './IncidentWhereInputSchema';

export const IncidentRelationFilterSchema: z.ZodType<Prisma.IncidentRelationFilter> = z.strictObject({
  is: z.lazy(() => IncidentWhereInputSchema).optional(),
  isNot: z.lazy(() => IncidentWhereInputSchema).optional(),
});

export default IncidentRelationFilterSchema;
