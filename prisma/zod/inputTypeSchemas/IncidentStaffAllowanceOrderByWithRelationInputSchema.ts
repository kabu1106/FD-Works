import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentStaffOrderByWithRelationInputSchema } from './IncidentStaffOrderByWithRelationInputSchema';
import { AllowanceTypeOrderByWithRelationInputSchema } from './AllowanceTypeOrderByWithRelationInputSchema';

export const IncidentStaffAllowanceOrderByWithRelationInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentStaffId: z.lazy(() => SortOrderSchema).optional(),
  allowanceTypeId: z.lazy(() => SortOrderSchema).optional(),
  incidentStaff: z.lazy(() => IncidentStaffOrderByWithRelationInputSchema).optional(),
  allowanceType: z.lazy(() => AllowanceTypeOrderByWithRelationInputSchema).optional(),
});

export default IncidentStaffAllowanceOrderByWithRelationInputSchema;
