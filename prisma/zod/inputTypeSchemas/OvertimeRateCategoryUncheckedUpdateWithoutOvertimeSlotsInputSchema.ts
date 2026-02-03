import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { OvertimeSummaryDetailUncheckedUpdateManyWithoutRateCategoryNestedInputSchema } from './OvertimeSummaryDetailUncheckedUpdateManyWithoutRateCategoryNestedInputSchema';

export const OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  OvertimeSummaryDetail: z.lazy(() => OvertimeSummaryDetailUncheckedUpdateManyWithoutRateCategoryNestedInputSchema).optional(),
});

export default OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema;
