import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { OvertimeSummaryDetailUpdateManyWithoutRateCategoryNestedInputSchema } from './OvertimeSummaryDetailUpdateManyWithoutRateCategoryNestedInputSchema';

export const OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUpdateWithoutOvertimeSlotsInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  OvertimeSummaryDetail: z.lazy(() => OvertimeSummaryDetailUpdateManyWithoutRateCategoryNestedInputSchema).optional(),
});

export default OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema;
