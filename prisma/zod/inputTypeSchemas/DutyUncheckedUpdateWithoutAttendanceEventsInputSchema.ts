import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { EnumScheduleStatusFieldUpdateOperationsInputSchema } from './EnumScheduleStatusFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkGroupAssignmentUncheckedUpdateManyWithoutDutyNestedInputSchema } from './WorkGroupAssignmentUncheckedUpdateManyWithoutDutyNestedInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateManyWithoutDutyNestedInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateManyWithoutDutyNestedInputSchema';
import { IncidentUncheckedUpdateManyWithoutDutyNestedInputSchema } from './IncidentUncheckedUpdateManyWithoutDutyNestedInputSchema';
import { AttendanceUncheckedUpdateManyWithoutDutyNestedInputSchema } from './AttendanceUncheckedUpdateManyWithoutDutyNestedInputSchema';
import { OvertimeSummaryUncheckedUpdateManyWithoutDutyNestedInputSchema } from './OvertimeSummaryUncheckedUpdateManyWithoutDutyNestedInputSchema';
import { DutyDayTypeUncheckedUpdateManyWithoutDutyNestedInputSchema } from './DutyDayTypeUncheckedUpdateManyWithoutDutyNestedInputSchema';

export const DutyUncheckedUpdateWithoutAttendanceEventsInputSchema: z.ZodType<Prisma.DutyUncheckedUpdateWithoutAttendanceEventsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teamId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => ScheduleStatusSchema), z.lazy(() => EnumScheduleStatusFieldUpdateOperationsInputSchema) ]).optional(),
  memo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isLocked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  lockedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lockedByUserId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hasEverCancelled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  workGroupAssignments: z.lazy(() => WorkGroupAssignmentUncheckedUpdateManyWithoutDutyNestedInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateManyWithoutDutyNestedInputSchema).optional(),
  incidents: z.lazy(() => IncidentUncheckedUpdateManyWithoutDutyNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutDutyNestedInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryUncheckedUpdateManyWithoutDutyNestedInputSchema).optional(),
  dutyDayTypes: z.lazy(() => DutyDayTypeUncheckedUpdateManyWithoutDutyNestedInputSchema).optional(),
});

export default DutyUncheckedUpdateWithoutAttendanceEventsInputSchema;
