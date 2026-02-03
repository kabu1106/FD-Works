import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateNestedOneWithoutStaffsInputSchema } from './TeamCreateNestedOneWithoutStaffsInputSchema';
import { WorkGroupAssignmentCreateNestedManyWithoutStaffInputSchema } from './WorkGroupAssignmentCreateNestedManyWithoutStaffInputSchema';
import { UserCreateNestedOneWithoutStaffInputSchema } from './UserCreateNestedOneWithoutStaffInputSchema';
import { SpecialLeaveAssignmentCreateNestedManyWithoutStaffInputSchema } from './SpecialLeaveAssignmentCreateNestedManyWithoutStaffInputSchema';
import { AttendanceCreateNestedManyWithoutStaffInputSchema } from './AttendanceCreateNestedManyWithoutStaffInputSchema';
import { OvertimeSummaryCreateNestedManyWithoutStaffInputSchema } from './OvertimeSummaryCreateNestedManyWithoutStaffInputSchema';

export const StaffCreateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.StaffCreateWithoutIncidentStaffInput> = z.strictObject({
  staffNo: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  photoKey: z.string().optional().nullable(),
  team: z.lazy(() => TeamCreateNestedOneWithoutStaffsInputSchema),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentCreateNestedManyWithoutStaffInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutStaffInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentCreateNestedManyWithoutStaffInputSchema).optional(),
  Attendance: z.lazy(() => AttendanceCreateNestedManyWithoutStaffInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryCreateNestedManyWithoutStaffInputSchema).optional(),
});

export default StaffCreateWithoutIncidentStaffInputSchema;
