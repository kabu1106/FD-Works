import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUncheckedCreateNestedOneWithoutStaffInputSchema } from './UserUncheckedCreateNestedOneWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema';
import { IncidentStaffUncheckedCreateNestedManyWithoutStaffInputSchema } from './IncidentStaffUncheckedCreateNestedManyWithoutStaffInputSchema';
import { AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema } from './AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema';
import { OvertimeSummaryUncheckedCreateNestedManyWithoutStaffInputSchema } from './OvertimeSummaryUncheckedCreateNestedManyWithoutStaffInputSchema';
import { AttendanceEventUncheckedCreateNestedManyWithoutStaffInputSchema } from './AttendanceEventUncheckedCreateNestedManyWithoutStaffInputSchema';
import { IncidentStaffEngagementUncheckedCreateNestedManyWithoutStaffInputSchema } from './IncidentStaffEngagementUncheckedCreateNestedManyWithoutStaffInputSchema';
import { SubstituteHolidayUncheckedCreateNestedManyWithoutStaffInputSchema } from './SubstituteHolidayUncheckedCreateNestedManyWithoutStaffInputSchema';
import { WeeklyDayOffUncheckedCreateNestedManyWithoutStaffInputSchema } from './WeeklyDayOffUncheckedCreateNestedManyWithoutStaffInputSchema';
import { DutyDayTypeUncheckedCreateNestedManyWithoutStaffInputSchema } from './DutyDayTypeUncheckedCreateNestedManyWithoutStaffInputSchema';

export const StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.StaffUncheckedCreateWithoutWorkGroupAssignmentInput> = z.strictObject({
  id: z.number().int().optional(),
  staffNo: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  photoKey: z.string().optional().nullable(),
  teamId: z.number().int(),
  user: z.lazy(() => UserUncheckedCreateNestedOneWithoutStaffInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  Attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  attendanceEvents: z.lazy(() => AttendanceEventUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  incidentStaffEngagements: z.lazy(() => IncidentStaffEngagementUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  substituteHolidays: z.lazy(() => SubstituteHolidayUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  weeklyDayOffs: z.lazy(() => WeeklyDayOffUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  dutyDayTypes: z.lazy(() => DutyDayTypeUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
});

export default StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema;
