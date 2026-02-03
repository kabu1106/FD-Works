import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const OvertimeSlotUpdateManyMutationInputSchema: z.ZodType<Prisma.OvertimeSlotUpdateManyMutationInput> = z.strictObject({
  startMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  endMinute: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export default OvertimeSlotUpdateManyMutationInputSchema;
