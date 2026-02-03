import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AllowanceTypeOrderByRelationAggregateInputSchema } from './AllowanceTypeOrderByRelationAggregateInputSchema';

export const AllowanceGroupOrderByWithRelationInputSchema: z.ZodType<Prisma.AllowanceGroupOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  allowanceTypes: z.lazy(() => AllowanceTypeOrderByRelationAggregateInputSchema).optional(),
});

export default AllowanceGroupOrderByWithRelationInputSchema;
