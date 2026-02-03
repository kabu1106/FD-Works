import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { EnumShiftTypeFieldUpdateOperationsInputSchema } from './EnumShiftTypeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { WorkShiftDayUncheckedUpdateManyWithoutWorkShiftNestedInputSchema } from './WorkShiftDayUncheckedUpdateManyWithoutWorkShiftNestedInputSchema';

export const WorkShiftUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.WorkShiftUncheckedUpdateWithoutTeamsInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shiftType: z.union([ z.lazy(() => ShiftTypeSchema), z.lazy(() => EnumShiftTypeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  workShiftDays: z.lazy(() => WorkShiftDayUncheckedUpdateManyWithoutWorkShiftNestedInputSchema).optional(),
});

export default WorkShiftUncheckedUpdateWithoutTeamsInputSchema;
