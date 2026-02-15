import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema } from './WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema';
import { UserUpdateOneWithoutStaffNestedInputSchema } from './UserUpdateOneWithoutStaffNestedInputSchema';
import { SpecialLeaveAssignmentUpdateManyWithoutStaffNestedInputSchema } from './SpecialLeaveAssignmentUpdateManyWithoutStaffNestedInputSchema';
import { IncidentStaffUpdateManyWithoutStaffNestedInputSchema } from './IncidentStaffUpdateManyWithoutStaffNestedInputSchema';
import { AttendanceUpdateManyWithoutStaffNestedInputSchema } from './AttendanceUpdateManyWithoutStaffNestedInputSchema';
import { OvertimeSummaryUpdateManyWithoutStaffNestedInputSchema } from './OvertimeSummaryUpdateManyWithoutStaffNestedInputSchema';
import { AttendanceEventUpdateManyWithoutStaffNestedInputSchema } from './AttendanceEventUpdateManyWithoutStaffNestedInputSchema';
import { IncidentStaffEngagementUpdateManyWithoutStaffNestedInputSchema } from './IncidentStaffEngagementUpdateManyWithoutStaffNestedInputSchema';
import { SubstituteHolidayUpdateManyWithoutStaffNestedInputSchema } from './SubstituteHolidayUpdateManyWithoutStaffNestedInputSchema';
import { WeeklyDayOffUpdateManyWithoutStaffNestedInputSchema } from './WeeklyDayOffUpdateManyWithoutStaffNestedInputSchema';
import { DutyDayTypeUpdateManyWithoutStaffNestedInputSchema } from './DutyDayTypeUpdateManyWithoutStaffNestedInputSchema';

export const StaffUpdateWithoutTeamInputSchema: z.ZodType<Prisma.StaffUpdateWithoutTeamInput> = z.strictObject({
  staffNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photoKey: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutStaffNestedInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUpdateManyWithoutStaffNestedInputSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffUpdateManyWithoutStaffNestedInputSchema).optional(),
  Attendance: z.lazy(() => AttendanceUpdateManyWithoutStaffNestedInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryUpdateManyWithoutStaffNestedInputSchema).optional(),
  attendanceEvents: z.lazy(() => AttendanceEventUpdateManyWithoutStaffNestedInputSchema).optional(),
  incidentStaffEngagements: z.lazy(() => IncidentStaffEngagementUpdateManyWithoutStaffNestedInputSchema).optional(),
  substituteHolidays: z.lazy(() => SubstituteHolidayUpdateManyWithoutStaffNestedInputSchema).optional(),
  weeklyDayOffs: z.lazy(() => WeeklyDayOffUpdateManyWithoutStaffNestedInputSchema).optional(),
  dutyDayTypes: z.lazy(() => DutyDayTypeUpdateManyWithoutStaffNestedInputSchema).optional(),
});

export default StaffUpdateWithoutTeamInputSchema;
