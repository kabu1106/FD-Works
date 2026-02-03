import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DutyUpdateOneRequiredWithoutOvertimeSummaryNestedInputSchema } from './DutyUpdateOneRequiredWithoutOvertimeSummaryNestedInputSchema';
import { OvertimeSummaryDetailUpdateManyWithoutOvertimeSummaryNestedInputSchema } from './OvertimeSummaryDetailUpdateManyWithoutOvertimeSummaryNestedInputSchema';

export const OvertimeSummaryUpdateWithoutStaffInputSchema: z.ZodType<Prisma.OvertimeSummaryUpdateWithoutStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  totalMinutes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isFinalized: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duty: z.lazy(() => DutyUpdateOneRequiredWithoutOvertimeSummaryNestedInputSchema).optional(),
  details: z.lazy(() => OvertimeSummaryDetailUpdateManyWithoutOvertimeSummaryNestedInputSchema).optional(),
});

export default OvertimeSummaryUpdateWithoutStaffInputSchema;
