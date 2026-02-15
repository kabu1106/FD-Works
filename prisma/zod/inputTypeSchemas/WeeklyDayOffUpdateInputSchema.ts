import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StaffUpdateOneRequiredWithoutWeeklyDayOffsNestedInputSchema } from './StaffUpdateOneRequiredWithoutWeeklyDayOffsNestedInputSchema';

export const WeeklyDayOffUpdateInputSchema: z.ZodType<Prisma.WeeklyDayOffUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutWeeklyDayOffsNestedInputSchema).optional(),
});

export default WeeklyDayOffUpdateInputSchema;
