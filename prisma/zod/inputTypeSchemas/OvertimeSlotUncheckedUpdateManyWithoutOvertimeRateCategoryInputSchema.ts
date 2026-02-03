import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const OvertimeSlotUncheckedUpdateManyWithoutOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotUncheckedUpdateManyWithoutOvertimeRateCategoryInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  workGroupId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  endMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export default OvertimeSlotUncheckedUpdateManyWithoutOvertimeRateCategoryInputSchema;
