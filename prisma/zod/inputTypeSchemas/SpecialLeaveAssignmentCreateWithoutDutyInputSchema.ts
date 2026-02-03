import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema } from './StaffCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema';

export const SpecialLeaveAssignmentCreateWithoutDutyInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  baseDate: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  staff: z.lazy(() => StaffCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema),
  specialLeaveType: z.lazy(() => SpecialLeaveTypeCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema),
});

export default SpecialLeaveAssignmentCreateWithoutDutyInputSchema;
