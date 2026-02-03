import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { AllowanceTypeUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInputSchema } from './AllowanceTypeUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInputSchema';

export const IncidentAllowanceSummaryUpdateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpdateWithoutIncidentStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isFinalized: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  allowanceType: z.lazy(() => AllowanceTypeUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInputSchema).optional(),
});

export default IncidentAllowanceSummaryUpdateWithoutIncidentStaffInputSchema;
