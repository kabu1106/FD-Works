import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema } from './WorkGroupAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema';
import { UserUncheckedCreateNestedOneWithoutStaffInputSchema } from './UserUncheckedCreateNestedOneWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema';
import { IncidentStaffUncheckedCreateNestedManyWithoutStaffInputSchema } from './IncidentStaffUncheckedCreateNestedManyWithoutStaffInputSchema';
import { AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema } from './AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema';
import { OvertimeSummaryUncheckedCreateNestedManyWithoutStaffInputSchema } from './OvertimeSummaryUncheckedCreateNestedManyWithoutStaffInputSchema';
import { AttendanceEventUncheckedCreateNestedManyWithoutStaffInputSchema } from './AttendanceEventUncheckedCreateNestedManyWithoutStaffInputSchema';
import { IncidentStaffEngagementUncheckedCreateNestedManyWithoutStaffInputSchema } from './IncidentStaffEngagementUncheckedCreateNestedManyWithoutStaffInputSchema';
import { SubstituteHolidayUncheckedCreateNestedManyWithoutStaffInputSchema } from './SubstituteHolidayUncheckedCreateNestedManyWithoutStaffInputSchema';
import { DutyDayTypeUncheckedCreateNestedManyWithoutStaffInputSchema } from './DutyDayTypeUncheckedCreateNestedManyWithoutStaffInputSchema';

export const StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema: z.ZodType<Prisma.StaffUncheckedCreateWithoutWeeklyDayOffsInput> = z.strictObject({
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
  OvertimeSummary: z.lazy(() => OvertimeSummaryUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  attendanceEvents: z.lazy(() => AttendanceEventUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  incidentStaffEngagements: z.lazy(() => IncidentStaffEngagementUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  substituteHolidays: z.lazy(() => SubstituteHolidayUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
  dutyDayTypes: z.lazy(() => DutyDayTypeUncheckedCreateNestedManyWithoutStaffInputSchema).optional(),
});

export default StaffUncheckedCreateWithoutWeeklyDayOffsInputSchema;
