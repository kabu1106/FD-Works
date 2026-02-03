import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const IncidentStaffAllowanceUpdateManyMutationInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export default IncidentStaffAllowanceUpdateManyMutationInputSchema;
