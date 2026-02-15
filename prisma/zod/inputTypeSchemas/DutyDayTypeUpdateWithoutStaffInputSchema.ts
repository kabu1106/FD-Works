import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DayTypeSchema } from './DayTypeSchema';
import { EnumDayTypeFieldUpdateOperationsInputSchema } from './EnumDayTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DutyUpdateOneRequiredWithoutDutyDayTypesNestedInputSchema } from './DutyUpdateOneRequiredWithoutDutyDayTypesNestedInputSchema';

export const DutyDayTypeUpdateWithoutStaffInputSchema: z.ZodType<Prisma.DutyDayTypeUpdateWithoutStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayType: z.union([ z.lazy(() => DayTypeSchema), z.lazy(() => EnumDayTypeFieldUpdateOperationsInputSchema) ]).optional(),
  reason: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decidedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  decidedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duty: z.lazy(() => DutyUpdateOneRequiredWithoutDutyDayTypesNestedInputSchema).optional(),
});

export default DutyDayTypeUpdateWithoutStaffInputSchema;
