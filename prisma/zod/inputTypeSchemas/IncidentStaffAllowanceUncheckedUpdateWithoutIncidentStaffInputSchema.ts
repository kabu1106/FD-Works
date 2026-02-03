import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const IncidentStaffAllowanceUncheckedUpdateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUncheckedUpdateWithoutIncidentStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  allowanceTypeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export default IncidentStaffAllowanceUncheckedUpdateWithoutIncidentStaffInputSchema;
