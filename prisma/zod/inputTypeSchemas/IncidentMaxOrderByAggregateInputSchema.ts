import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  typeId: z.lazy(() => SortOrderSchema).optional(),
  locationId: z.lazy(() => SortOrderSchema).optional(),
  destinationId: z.lazy(() => SortOrderSchema).optional(),
  destinationName: z.lazy(() => SortOrderSchema).optional(),
  occurredAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  isDeleted: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentMaxOrderByAggregateInputSchema;
