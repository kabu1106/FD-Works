import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IncidentStaffUpdateOneRequiredWithoutAllowancesNestedInputSchema } from './IncidentStaffUpdateOneRequiredWithoutAllowancesNestedInputSchema';
import { AllowanceTypeUpdateOneRequiredWithoutIncidentStaffAllowanceNestedInputSchema } from './AllowanceTypeUpdateOneRequiredWithoutIncidentStaffAllowanceNestedInputSchema';

export const IncidentStaffAllowanceUpdateInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentStaff: z.lazy(() => IncidentStaffUpdateOneRequiredWithoutAllowancesNestedInputSchema).optional(),
  allowanceType: z.lazy(() => AllowanceTypeUpdateOneRequiredWithoutIncidentStaffAllowanceNestedInputSchema).optional(),
});

export default IncidentStaffAllowanceUpdateInputSchema;
