import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AllowanceGroupOrderByWithRelationInputSchema } from './AllowanceGroupOrderByWithRelationInputSchema';
import { IncidentStaffAllowanceOrderByRelationAggregateInputSchema } from './IncidentStaffAllowanceOrderByRelationAggregateInputSchema';
import { IncidentAllowanceSummaryOrderByRelationAggregateInputSchema } from './IncidentAllowanceSummaryOrderByRelationAggregateInputSchema';

export const AllowanceTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.AllowanceTypeOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  allowanceGroupId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  allowanceGroup: z.lazy(() => AllowanceGroupOrderByWithRelationInputSchema).optional(),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceOrderByRelationAggregateInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryOrderByRelationAggregateInputSchema).optional(),
});

export default AllowanceTypeOrderByWithRelationInputSchema;
