import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentTypeOrderByRelationAggregateInputSchema } from './IncidentTypeOrderByRelationAggregateInputSchema';
import { IncidentOrderByRelationAggregateInputSchema } from './IncidentOrderByRelationAggregateInputSchema';

export const IncidentCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.IncidentCategoryOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  types: z.lazy(() => IncidentTypeOrderByRelationAggregateInputSchema).optional(),
  Incident: z.lazy(() => IncidentOrderByRelationAggregateInputSchema).optional(),
});

export default IncidentCategoryOrderByWithRelationInputSchema;
