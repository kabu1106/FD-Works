import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { OvertimeRateCategoryUpdateOneWithoutOvertimeSlotsNestedInputSchema } from './OvertimeRateCategoryUpdateOneWithoutOvertimeSlotsNestedInputSchema';

export const OvertimeSlotUpdateWithoutWorkGroupInputSchema: z.ZodType<Prisma.OvertimeSlotUpdateWithoutWorkGroupInput> = z.strictObject({
  startMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  endMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  overtimeRateCategory: z.lazy(() => OvertimeRateCategoryUpdateOneWithoutOvertimeSlotsNestedInputSchema).optional(),
});

export default OvertimeSlotUpdateWithoutWorkGroupInputSchema;
