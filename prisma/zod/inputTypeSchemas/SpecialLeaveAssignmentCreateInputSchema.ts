import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema } from './DutyCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema } from './StaffCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema';

export const SpecialLeaveAssignmentCreateInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentCreateInput> = z.strictObject({
  id: z.string().optional(),
  baseDate: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema),
  specialLeaveType: z.lazy(() => SpecialLeaveTypeCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema),
});

export default SpecialLeaveAssignmentCreateInputSchema;
