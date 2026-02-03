import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { OvertimeSlotUpdateManyWithoutOvertimeRateCategoryNestedInputSchema } from './OvertimeSlotUpdateManyWithoutOvertimeRateCategoryNestedInputSchema';

export const OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotUpdateManyWithoutOvertimeRateCategoryNestedInputSchema).optional(),
});

export default OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema;
