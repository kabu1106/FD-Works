import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const IncidentStaffAllowanceUncheckedUpdateManyWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUncheckedUpdateManyWithoutAllowanceTypeInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentStaffId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export default IncidentStaffAllowanceUncheckedUpdateManyWithoutAllowanceTypeInputSchema;
