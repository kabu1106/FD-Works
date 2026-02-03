import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema } from './WorkGroupAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema';
import { UserUncheckedCreateNestedOneWithoutStaffInputSchema } from './UserUncheckedCreateNestedOneWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema';
import { AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema } from './AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema';
import { OvertimeSummaryUncheckedCreateNestedManyWithoutStaffInputSchema } from './OvertimeSummaryUncheckedCreateNestedManyWithoutStaffInputSchema';

export const StaffUncheckedCreateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.StaffUncheckedCreateWithoutIncidentStaffInput> = z.strictObject({
  id: z.number().int().optional(),
  staffNo: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  photoKey: z.string().optional().nullable(),
  teamId: z.number().int(),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  user: z.lazy(() => UserUncheckedCreateNestedOneWithoutStaffInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  Attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
});

export default StaffUncheckedCreateWithoutIncidentStaffInputSchema;
