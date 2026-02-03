import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentTypeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.IncidentTypeOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentTypeOrderByRelationAggregateInputSchema;
