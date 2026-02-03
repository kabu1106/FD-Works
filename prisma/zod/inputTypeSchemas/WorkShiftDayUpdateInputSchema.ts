import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { EnumWorkTypeFieldUpdateOperationsInputSchema } from './EnumWorkTypeFieldUpdateOperationsInputSchema';
import { WorkShiftUpdateOneRequiredWithoutWorkShiftDaysNestedInputSchema } from './WorkShiftUpdateOneRequiredWithoutWorkShiftDaysNestedInputSchema';

export const WorkShiftDayUpdateInputSchema: z.ZodType<Prisma.WorkShiftDayUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => WorkTypeSchema), z.lazy(() => EnumWorkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  workShift: z.lazy(() => WorkShiftUpdateOneRequiredWithoutWorkShiftDaysNestedInputSchema).optional(),
});

export default WorkShiftDayUpdateInputSchema;
