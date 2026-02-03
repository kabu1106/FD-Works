import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IncidentStaffUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInputSchema } from './IncidentStaffUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInputSchema';

export const IncidentAllowanceSummaryUpdateWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpdateWithoutAllowanceTypeInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isFinalized: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  incidentStaff: z.lazy(() => IncidentStaffUpdateOneRequiredWithoutIncidentAllowanceSummaryNestedInputSchema).optional(),
});

export default IncidentAllowanceSummaryUpdateWithoutAllowanceTypeInputSchema;
