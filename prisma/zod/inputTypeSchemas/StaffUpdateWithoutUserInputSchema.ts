import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TeamUpdateOneRequiredWithoutStaffsNestedInputSchema } from './TeamUpdateOneRequiredWithoutStaffsNestedInputSchema';
import { WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema } from './WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema';
import { SpecialLeaveAssignmentUpdateManyWithoutStaffNestedInputSchema } from './SpecialLeaveAssignmentUpdateManyWithoutStaffNestedInputSchema';
import { IncidentStaffUpdateManyWithoutStaffNestedInputSchema } from './IncidentStaffUpdateManyWithoutStaffNestedInputSchema';
import { AttendanceUpdateManyWithoutStaffNestedInputSchema } from './AttendanceUpdateManyWithoutStaffNestedInputSchema';
import { OvertimeSummaryUpdateManyWithoutStaffNestedInputSchema } from './OvertimeSummaryUpdateManyWithoutStaffNestedInputSchema';
import { AttendanceEventUpdateManyWithoutStaffNestedInputSchema } from './AttendanceEventUpdateManyWithoutStaffNestedInputSchema';
import { IncidentStaffEngagementUpdateManyWithoutStaffNestedInputSchema } from './IncidentStaffEngagementUpdateManyWithoutStaffNestedInputSchema';
import { SubstituteHolidayUpdateManyWithoutStaffNestedInputSchema } from './SubstituteHolidayUpdateManyWithoutStaffNestedInputSchema';
import { WeeklyDayOffUpdateManyWithoutStaffNestedInputSchema } from './WeeklyDayOffUpdateManyWithoutStaffNestedInputSchema';
import { DutyDayTypeUpdateManyWithoutStaffNestedInputSchema } from './DutyDayTypeUpdateManyWithoutStaffNestedInputSchema';

export const StaffUpdateWithoutUserInputSchema: z.ZodType<Prisma.StaffUpdateWithoutUserInput> = z.strictObject({
  staffNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photoKey: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team: z.lazy(() => TeamUpdateOneRequiredWithoutStaffsNestedInputSchema).optional(),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema).optional(),
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

export default StaffUpdateWithoutUserInputSchema;
