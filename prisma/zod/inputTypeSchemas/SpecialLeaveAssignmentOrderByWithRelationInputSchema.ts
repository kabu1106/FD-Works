import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DutyOrderByWithRelationInputSchema } from './DutyOrderByWithRelationInputSchema';
import { StaffOrderByWithRelationInputSchema } from './StaffOrderByWithRelationInputSchema';
import { SpecialLeaveTypeOrderByWithRelationInputSchema } from './SpecialLeaveTypeOrderByWithRelationInputSchema';

export const SpecialLeaveAssignmentOrderByWithRelationInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  specialLeaveTypeId: z.lazy(() => SortOrderSchema).optional(),
  baseDate: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  duty: z.lazy(() => DutyOrderByWithRelationInputSchema).optional(),
  staff: z.lazy(() => StaffOrderByWithRelationInputSchema).optional(),
  specialLeaveType: z.lazy(() => SpecialLeaveTypeOrderByWithRelationInputSchema).optional(),
});

export default SpecialLeaveAssignmentOrderByWithRelationInputSchema;
