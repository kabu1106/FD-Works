import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateNestedOneWithoutStaffsInputSchema } from './TeamCreateNestedOneWithoutStaffsInputSchema';
import { UserCreateNestedOneWithoutStaffInputSchema } from './UserCreateNestedOneWithoutStaffInputSchema';
import { SpecialLeaveAssignmentCreateNestedManyWithoutStaffInputSchema } from './SpecialLeaveAssignmentCreateNestedManyWithoutStaffInputSchema';
import { IncidentStaffCreateNestedManyWithoutStaffInputSchema } from './IncidentStaffCreateNestedManyWithoutStaffInputSchema';
import { AttendanceCreateNestedManyWithoutStaffInputSchema } from './AttendanceCreateNestedManyWithoutStaffInputSchema';
import { OvertimeSummaryCreateNestedManyWithoutStaffInputSchema } from './OvertimeSummaryCreateNestedManyWithoutStaffInputSchema';

export const StaffCreateWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.StaffCreateWithoutWorkGroupAssignmentInput> = z.strictObject({
  staffNo: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  photoKey: z.string().optional().nullable(),
  team: z.lazy(() => TeamCreateNestedOneWithoutStaffsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutStaffInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentCreateNestedManyWithoutStaffInputSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffCreateNestedManyWithoutStaffInputSchema).optional(),
  Attendance: z.lazy(() => AttendanceCreateNestedManyWithoutStaffInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryCreateNestedManyWithoutStaffInputSchema).optional(),
});

export default StaffCreateWithoutWorkGroupAssignmentInputSchema;
