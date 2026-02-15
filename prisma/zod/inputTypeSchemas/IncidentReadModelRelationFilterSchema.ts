import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentReadModelWhereInputSchema } from './IncidentReadModelWhereInputSchema';

export const IncidentReadModelRelationFilterSchema: z.ZodType<Prisma.IncidentReadModelRelationFilter> = z.strictObject({
  is: z.lazy(() => IncidentReadModelWhereInputSchema).optional(),
  isNot: z.lazy(() => IncidentReadModelWhereInputSchema).optional(),
});

export default IncidentReadModelRelationFilterSchema;
