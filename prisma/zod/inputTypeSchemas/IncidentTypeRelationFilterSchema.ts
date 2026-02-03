import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeWhereInputSchema } from './IncidentTypeWhereInputSchema';

export const IncidentTypeRelationFilterSchema: z.ZodType<Prisma.IncidentTypeRelationFilter> = z.strictObject({
  is: z.lazy(() => IncidentTypeWhereInputSchema).optional(),
  isNot: z.lazy(() => IncidentTypeWhereInputSchema).optional(),
});

export default IncidentTypeRelationFilterSchema;
