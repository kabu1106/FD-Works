import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentStaffOrderByWithRelationInputSchema } from './IncidentStaffOrderByWithRelationInputSchema';
import { AllowanceTypeOrderByWithRelationInputSchema } from './AllowanceTypeOrderByWithRelationInputSchema';

export const IncidentAllowanceSummaryOrderByWithRelationInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentStaffId: z.lazy(() => SortOrderSchema).optional(),
  allowanceTypeId: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  isFinalized: z.lazy(() => SortOrderSchema).optional(),
  incidentStaff: z.lazy(() => IncidentStaffOrderByWithRelationInputSchema).optional(),
  allowanceType: z.lazy(() => AllowanceTypeOrderByWithRelationInputSchema).optional(),
});

export default IncidentAllowanceSummaryOrderByWithRelationInputSchema;
