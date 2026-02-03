import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { OvertimeSummaryUpdateOneRequiredWithoutDetailsNestedInputSchema } from './OvertimeSummaryUpdateOneRequiredWithoutDetailsNestedInputSchema';
import { OvertimeRateCategoryUpdateOneRequiredWithoutOvertimeSummaryDetailNestedInputSchema } from './OvertimeRateCategoryUpdateOneRequiredWithoutOvertimeSummaryDetailNestedInputSchema';

export const OvertimeSummaryDetailUpdateInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rateSnapshot: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  minutes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  overtimeSummary: z.lazy(() => OvertimeSummaryUpdateOneRequiredWithoutDetailsNestedInputSchema).optional(),
  rateCategory: z.lazy(() => OvertimeRateCategoryUpdateOneRequiredWithoutOvertimeSummaryDetailNestedInputSchema).optional(),
});

export default OvertimeSummaryDetailUpdateInputSchema;
