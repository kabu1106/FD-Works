import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { OvertimeSummaryUpdateOneRequiredWithoutDetailsNestedInputSchema } from './OvertimeSummaryUpdateOneRequiredWithoutDetailsNestedInputSchema';

export const OvertimeSummaryDetailUpdateWithoutRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpdateWithoutRateCategoryInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rateSnapshot: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  minutes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  overtimeSummary: z.lazy(() => OvertimeSummaryUpdateOneRequiredWithoutDetailsNestedInputSchema).optional(),
});

export default OvertimeSummaryDetailUpdateWithoutRateCategoryInputSchema;
