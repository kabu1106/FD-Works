import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStatusSchema } from './IncidentStatusSchema';

export const EnumIncidentStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumIncidentStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => IncidentStatusSchema).optional(),
});

export default EnumIncidentStatusFieldUpdateOperationsInputSchema;
