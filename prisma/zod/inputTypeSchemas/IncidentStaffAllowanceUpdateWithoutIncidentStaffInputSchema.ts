import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AllowanceTypeUpdateOneRequiredWithoutIncidentStaffAllowanceNestedInputSchema } from './AllowanceTypeUpdateOneRequiredWithoutIncidentStaffAllowanceNestedInputSchema';

export const IncidentStaffAllowanceUpdateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateWithoutIncidentStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  allowanceType: z.lazy(() => AllowanceTypeUpdateOneRequiredWithoutIncidentStaffAllowanceNestedInputSchema).optional(),
});

export default IncidentStaffAllowanceUpdateWithoutIncidentStaffInputSchema;
