import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IncidentStaffUpdateOneRequiredWithoutAllowancesNestedInputSchema } from './IncidentStaffUpdateOneRequiredWithoutAllowancesNestedInputSchema';

export const IncidentStaffAllowanceUpdateWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateWithoutAllowanceTypeInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentStaff: z.lazy(() => IncidentStaffUpdateOneRequiredWithoutAllowancesNestedInputSchema).optional(),
});

export default IncidentStaffAllowanceUpdateWithoutAllowanceTypeInputSchema;
