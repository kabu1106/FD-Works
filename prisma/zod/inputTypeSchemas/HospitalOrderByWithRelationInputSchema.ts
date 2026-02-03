import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { IncidentOrderByRelationAggregateInputSchema } from './IncidentOrderByRelationAggregateInputSchema';

export const HospitalOrderByWithRelationInputSchema: z.ZodType<Prisma.HospitalOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  longitude: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  destination: z.lazy(() => IncidentOrderByRelationAggregateInputSchema).optional(),
});

export default HospitalOrderByWithRelationInputSchema;
