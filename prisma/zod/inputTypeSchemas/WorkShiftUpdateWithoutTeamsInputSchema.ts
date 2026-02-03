import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { EnumShiftTypeFieldUpdateOperationsInputSchema } from './EnumShiftTypeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { WorkShiftDayUpdateManyWithoutWorkShiftNestedInputSchema } from './WorkShiftDayUpdateManyWithoutWorkShiftNestedInputSchema';

export const WorkShiftUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.WorkShiftUpdateWithoutTeamsInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shiftType: z.union([ z.lazy(() => ShiftTypeSchema), z.lazy(() => EnumShiftTypeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  workShiftDays: z.lazy(() => WorkShiftDayUpdateManyWithoutWorkShiftNestedInputSchema).optional(),
});

export default WorkShiftUpdateWithoutTeamsInputSchema;
