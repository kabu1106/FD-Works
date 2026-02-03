import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { EnumWorkTypeFieldUpdateOperationsInputSchema } from './EnumWorkTypeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const WorkShiftDayUncheckedUpdateInputSchema: z.ZodType<Prisma.WorkShiftDayUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => WorkTypeSchema), z.lazy(() => EnumWorkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  workShiftId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export default WorkShiftDayUncheckedUpdateInputSchema;
