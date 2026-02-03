import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const OvertimeSlotUncheckedUpdateWithoutOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotUncheckedUpdateWithoutOvertimeRateCategoryInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  workGroupId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  endMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export default OvertimeSlotUncheckedUpdateWithoutOvertimeRateCategoryInputSchema;
