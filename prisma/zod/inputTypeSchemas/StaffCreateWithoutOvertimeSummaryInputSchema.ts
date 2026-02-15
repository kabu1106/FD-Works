import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateNestedOneWithoutStaffsInputSchema } from './TeamCreateNestedOneWithoutStaffsInputSchema';
import { WorkGroupAssignmentCreateNestedManyWithoutStaffInputSchema } from './WorkGroupAssignmentCreateNestedManyWithoutStaffInputSchema';
import { UserCreateNestedOneWithoutStaffInputSchema } from './UserCreateNestedOneWithoutStaffInputSchema';
import { SpecialLeaveAssignmentCreateNestedManyWithoutStaffInputSchema } from './SpecialLeaveAssignmentCreateNestedManyWithoutStaffInputSchema';
import { IncidentStaffCreateNestedManyWithoutStaffInputSchema } from './IncidentStaffCreateNestedManyWithoutStaffInputSchema';
import { AttendanceCreateNestedManyWithoutStaffInputSchema } from './AttendanceCreateNestedManyWithoutStaffInputSchema';
import { AttendanceEventCreateNestedManyWithoutStaffInputSchema } from './AttendanceEventCreateNestedManyWithoutStaffInputSchema';
import { IncidentStaffEngagementCreateNestedManyWithoutStaffInputSchema } from './IncidentStaffEngagementCreateNestedManyWithoutStaffInputSchema';
import { SubstituteHolidayCreateNestedManyWithoutStaffInputSchema } from './SubstituteHolidayCreateNestedManyWithoutStaffInputSchema';
import { WeeklyDayOffCreateNestedManyWithoutStaffInputSchema } from './WeeklyDayOffCreateNestedManyWithoutStaffInputSchema';
import { DutyDayTypeCreateNestedManyWithoutStaffInputSchema } from './DutyDayTypeCreateNestedManyWithoutStaffInputSchema';

export const StaffCreateWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.StaffCreateWithoutOvertimeSummaryInput> = z.strictObject({
  staffNo: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  photoKey: z.string().optional().nullable(),
  team: z.lazy(() => TeamCreateNestedOneWithoutStaffsInputSchema),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentCreateNestedManyWithoutStaffInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutStaffInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentCreateNestedManyWithoutStaffInputSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffCreateNestedManyWithoutStaffInputSchema).optional(),
  Attendance: z.lazy(() => AttendanceCreateNestedManyWithoutStaffInputSchema).optional(),
  attendanceEvents: z.lazy(() => AttendanceEventCreateNestedManyWithoutStaffInputSchema).optional(),
  incidentStaffEngagements: z.lazy(() => IncidentStaffEngagementCreateNestedManyWithoutStaffInputSchema).optional(),
  substituteHolidays: z.lazy(() => SubstituteHolidayCreateNestedManyWithoutStaffInputSchema).optional(),
  weeklyDayOffs: z.lazy(() => WeeklyDayOffCreateNestedManyWithoutStaffInputSchema).optional(),
  dutyDayTypes: z.lazy(() => DutyDayTypeCreateNestedManyWithoutStaffInputSchema).optional(),
});

export default StaffCreateWithoutOvertimeSummaryInputSchema;
