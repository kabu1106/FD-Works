import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { AllowanceGroupUpdateOneRequiredWithoutAllowanceTypesNestedInputSchema } from './AllowanceGroupUpdateOneRequiredWithoutAllowanceTypesNestedInputSchema';
import { IncidentStaffAllowanceUpdateManyWithoutAllowanceTypeNestedInputSchema } from './IncidentStaffAllowanceUpdateManyWithoutAllowanceTypeNestedInputSchema';

export const AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  allowanceGroup: z.lazy(() => AllowanceGroupUpdateOneRequiredWithoutAllowanceTypesNestedInputSchema).optional(),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceUpdateManyWithoutAllowanceTypeNestedInputSchema).optional(),
});

export default AllowanceTypeUpdateWithoutIncidentAllowanceSummaryInputSchema;
