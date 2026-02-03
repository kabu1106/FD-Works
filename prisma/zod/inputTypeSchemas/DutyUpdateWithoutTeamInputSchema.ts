import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { EnumScheduleStatusFieldUpdateOperationsInputSchema } from './EnumScheduleStatusFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkGroupAssignmentUpdateManyWithoutDutyNestedInputSchema } from './WorkGroupAssignmentUpdateManyWithoutDutyNestedInputSchema';
import { SpecialLeaveAssignmentUpdateManyWithoutDutyNestedInputSchema } from './SpecialLeaveAssignmentUpdateManyWithoutDutyNestedInputSchema';
import { IncidentUpdateManyWithoutDutyNestedInputSchema } from './IncidentUpdateManyWithoutDutyNestedInputSchema';
import { AttendanceUpdateManyWithoutDutyNestedInputSchema } from './AttendanceUpdateManyWithoutDutyNestedInputSchema';
import { OvertimeSummaryUpdateManyWithoutDutyNestedInputSchema } from './OvertimeSummaryUpdateManyWithoutDutyNestedInputSchema';

export const DutyUpdateWithoutTeamInputSchema: z.ZodType<Prisma.DutyUpdateWithoutTeamInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => ScheduleStatusSchema), z.lazy(() => EnumScheduleStatusFieldUpdateOperationsInputSchema) ]).optional(),
  memo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isLocked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  lockedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lockedByUserId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hasEverCancelled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  workGroupAssignments: z.lazy(() => WorkGroupAssignmentUpdateManyWithoutDutyNestedInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUpdateManyWithoutDutyNestedInputSchema).optional(),
  incidents: z.lazy(() => IncidentUpdateManyWithoutDutyNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUpdateManyWithoutDutyNestedInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryUpdateManyWithoutDutyNestedInputSchema).optional(),
});

export default DutyUpdateWithoutTeamInputSchema;
