import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { EnumShiftTypeFieldUpdateOperationsInputSchema } from './EnumShiftTypeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { TeamUpdateManyWithoutWorkShiftNestedInputSchema } from './TeamUpdateManyWithoutWorkShiftNestedInputSchema';

export const WorkShiftUpdateWithoutWorkShiftDaysInputSchema: z.ZodType<Prisma.WorkShiftUpdateWithoutWorkShiftDaysInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shiftType: z.union([ z.lazy(() => ShiftTypeSchema), z.lazy(() => EnumShiftTypeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutWorkShiftNestedInputSchema).optional(),
});

export default WorkShiftUpdateWithoutWorkShiftDaysInputSchema;
