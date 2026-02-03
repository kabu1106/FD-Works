import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { WorkGroupUpdateOneRequiredWithoutOvertimeSlotsNestedInputSchema } from './WorkGroupUpdateOneRequiredWithoutOvertimeSlotsNestedInputSchema';

export const OvertimeSlotUpdateWithoutOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotUpdateWithoutOvertimeRateCategoryInput> = z.strictObject({
  startMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  endMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  workGroup: z.lazy(() => WorkGroupUpdateOneRequiredWithoutOvertimeSlotsNestedInputSchema).optional(),
});

export default OvertimeSlotUpdateWithoutOvertimeRateCategoryInputSchema;
