import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkGroupAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema } from './WorkGroupAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema';
import { UserUncheckedUpdateOneWithoutStaffNestedInputSchema } from './UserUncheckedUpdateOneWithoutStaffNestedInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema';
import { AttendanceUncheckedUpdateManyWithoutStaffNestedInputSchema } from './AttendanceUncheckedUpdateManyWithoutStaffNestedInputSchema';
import { OvertimeSummaryUncheckedUpdateManyWithoutStaffNestedInputSchema } from './OvertimeSummaryUncheckedUpdateManyWithoutStaffNestedInputSchema';

export const StaffUncheckedUpdateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.StaffUncheckedUpdateWithoutIncidentStaffInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  staffNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photoKey: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  teamId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema).optional(),
  user: z.lazy(() => UserUncheckedUpdateOneWithoutStaffNestedInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema).optional(),
  Attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutStaffNestedInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryUncheckedUpdateManyWithoutStaffNestedInputSchema).optional(),
});

export default StaffUncheckedUpdateWithoutIncidentStaffInputSchema;
