import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { AllowanceGroupUpdateOneRequiredWithoutAllowanceTypesNestedInputSchema } from './AllowanceGroupUpdateOneRequiredWithoutAllowanceTypesNestedInputSchema';
import { IncidentAllowanceSummaryUpdateManyWithoutAllowanceTypeNestedInputSchema } from './IncidentAllowanceSummaryUpdateManyWithoutAllowanceTypeNestedInputSchema';

export const AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema: z.ZodType<Prisma.AllowanceTypeUpdateWithoutIncidentStaffAllowanceInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  allowanceGroup: z.lazy(() => AllowanceGroupUpdateOneRequiredWithoutAllowanceTypesNestedInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUpdateManyWithoutAllowanceTypeNestedInputSchema).optional(),
});

export default AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema;
