import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TeamUpdateOneRequiredWithoutStaffsNestedInputSchema } from './TeamUpdateOneRequiredWithoutStaffsNestedInputSchema';
import { WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema } from './WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema';
import { UserUpdateOneWithoutStaffNestedInputSchema } from './UserUpdateOneWithoutStaffNestedInputSchema';
import { SpecialLeaveAssignmentUpdateManyWithoutStaffNestedInputSchema } from './SpecialLeaveAssignmentUpdateManyWithoutStaffNestedInputSchema';
import { AttendanceUpdateManyWithoutStaffNestedInputSchema } from './AttendanceUpdateManyWithoutStaffNestedInputSchema';
import { OvertimeSummaryUpdateManyWithoutStaffNestedInputSchema } from './OvertimeSummaryUpdateManyWithoutStaffNestedInputSchema';

export const StaffUpdateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.StaffUpdateWithoutIncidentStaffInput> = z.strictObject({
  staffNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photoKey: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team: z.lazy(() => TeamUpdateOneRequiredWithoutStaffsNestedInputSchema).optional(),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutStaffNestedInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUpdateManyWithoutStaffNestedInputSchema).optional(),
  Attendance: z.lazy(() => AttendanceUpdateManyWithoutStaffNestedInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryUpdateManyWithoutStaffNestedInputSchema).optional(),
});

export default StaffUpdateWithoutIncidentStaffInputSchema;
