import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeWhereInputSchema } from './IncidentTypeWhereInputSchema';

export const IncidentTypeListRelationFilterSchema: z.ZodType<Prisma.IncidentTypeListRelationFilter> = z.strictObject({
  every: z.lazy(() => IncidentTypeWhereInputSchema).optional(),
  some: z.lazy(() => IncidentTypeWhereInputSchema).optional(),
  none: z.lazy(() => IncidentTypeWhereInputSchema).optional(),
});

export default IncidentTypeListRelationFilterSchema;
