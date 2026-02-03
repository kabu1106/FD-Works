import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { OvertimeRateCategoryUpdateOneWithoutOvertimeSlotsNestedInputSchema } from './OvertimeRateCategoryUpdateOneWithoutOvertimeSlotsNestedInputSchema';
import { WorkGroupUpdateOneRequiredWithoutOvertimeSlotsNestedInputSchema } from './WorkGroupUpdateOneRequiredWithoutOvertimeSlotsNestedInputSchema';

export const OvertimeSlotUpdateInputSchema: z.ZodType<Prisma.OvertimeSlotUpdateInput> = z.strictObject({
  startMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  endMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  overtimeRateCategory: z.lazy(() => OvertimeRateCategoryUpdateOneWithoutOvertimeSlotsNestedInputSchema).optional(),
  workGroup: z.lazy(() => WorkGroupUpdateOneRequiredWithoutOvertimeSlotsNestedInputSchema).optional(),
});

export default OvertimeSlotUpdateInputSchema;
