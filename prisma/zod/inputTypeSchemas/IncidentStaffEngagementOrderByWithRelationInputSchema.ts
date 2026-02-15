import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentOrderByWithRelationInputSchema } from './IncidentOrderByWithRelationInputSchema';
import { StaffOrderByWithRelationInputSchema } from './StaffOrderByWithRelationInputSchema';

export const IncidentStaffEngagementOrderByWithRelationInputSchema: z.ZodType<Prisma.IncidentStaffEngagementOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  engagedFrom: z.lazy(() => SortOrderSchema).optional(),
  engagedTo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  incident: z.lazy(() => IncidentOrderByWithRelationInputSchema).optional(),
  staff: z.lazy(() => StaffOrderByWithRelationInputSchema).optional(),
});

export default IncidentStaffEngagementOrderByWithRelationInputSchema;
