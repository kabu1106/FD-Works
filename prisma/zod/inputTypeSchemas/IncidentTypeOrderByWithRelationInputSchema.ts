import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentCategoryOrderByWithRelationInputSchema } from './IncidentCategoryOrderByWithRelationInputSchema';
import { IncidentOrderByRelationAggregateInputSchema } from './IncidentOrderByRelationAggregateInputSchema';

export const IncidentTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.IncidentTypeOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => IncidentCategoryOrderByWithRelationInputSchema).optional(),
  Incident: z.lazy(() => IncidentOrderByRelationAggregateInputSchema).optional(),
});

export default IncidentTypeOrderByWithRelationInputSchema;
