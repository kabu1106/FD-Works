import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema } from './WorkGroupAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema';
import { UserUncheckedCreateNestedOneWithoutStaffInputSchema } from './UserUncheckedCreateNestedOneWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema';
import { IncidentStaffUncheckedCreateNestedManyWithoutStaffInputSchema } from './IncidentStaffUncheckedCreateNestedManyWithoutStaffInputSchema';
import { AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema } from './AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema';

export const StaffUncheckedCreateWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.StaffUncheckedCreateWithoutOvertimeSummaryInput> = z.strictObject({
  id: z.number().int().optional(),
  staffNo: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  photoKey: z.string().optional().nullable(),
  teamId: z.number().int(),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  user: z.lazy(() => UserUncheckedCreateNestedOneWithoutStaffInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  Attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
});

export default StaffUncheckedCreateWithoutOvertimeSummaryInputSchema;
