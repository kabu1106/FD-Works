import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DutyOrderByWithRelationInputSchema } from './DutyOrderByWithRelationInputSchema';
import { StaffOrderByWithRelationInputSchema } from './StaffOrderByWithRelationInputSchema';
import { OvertimeSummaryDetailOrderByRelationAggregateInputSchema } from './OvertimeSummaryDetailOrderByRelationAggregateInputSchema';

export const OvertimeSummaryOrderByWithRelationInputSchema: z.ZodType<Prisma.OvertimeSummaryOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  calculationVersion: z.lazy(() => SortOrderSchema).optional(),
  totalMinutes: z.lazy(() => SortOrderSchema).optional(),
  isFinalized: z.lazy(() => SortOrderSchema).optional(),
  calculatedAt: z.lazy(() => SortOrderSchema).optional(),
  duty: z.lazy(() => DutyOrderByWithRelationInputSchema).optional(),
  staff: z.lazy(() => StaffOrderByWithRelationInputSchema).optional(),
  details: z.lazy(() => OvertimeSummaryDetailOrderByRelationAggregateInputSchema).optional(),
});

export default OvertimeSummaryOrderByWithRelationInputSchema;
