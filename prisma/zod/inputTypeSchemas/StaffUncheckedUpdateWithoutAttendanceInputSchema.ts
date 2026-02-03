import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkGroupAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema } from './WorkGroupAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema';
import { UserUncheckedUpdateOneWithoutStaffNestedInputSchema } from './UserUncheckedUpdateOneWithoutStaffNestedInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema';
import { IncidentStaffUncheckedUpdateManyWithoutStaffNestedInputSchema } from './IncidentStaffUncheckedUpdateManyWithoutStaffNestedInputSchema';
import { OvertimeSummaryUncheckedUpdateManyWithoutStaffNestedInputSchema } from './OvertimeSummaryUncheckedUpdateManyWithoutStaffNestedInputSchema';

export const StaffUncheckedUpdateWithoutAttendanceInputSchema: z.ZodType<Prisma.StaffUncheckedUpdateWithoutAttendanceInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  staffNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photoKey: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  teamId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema).optional(),
  user: z.lazy(() => UserUncheckedUpdateOneWithoutStaffNestedInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffUncheckedUpdateManyWithoutStaffNestedInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryUncheckedUpdateManyWithoutStaffNestedInputSchema).optional(),
});

export default StaffUncheckedUpdateWithoutAttendanceInputSchema;
