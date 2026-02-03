import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereInputSchema } from './IncidentWhereInputSchema';

export const IncidentListRelationFilterSchema: z.ZodType<Prisma.IncidentListRelationFilter> = z.strictObject({
  every: z.lazy(() => IncidentWhereInputSchema).optional(),
  some: z.lazy(() => IncidentWhereInputSchema).optional(),
  none: z.lazy(() => IncidentWhereInputSchema).optional(),
});

export default IncidentListRelationFilterSchema;
