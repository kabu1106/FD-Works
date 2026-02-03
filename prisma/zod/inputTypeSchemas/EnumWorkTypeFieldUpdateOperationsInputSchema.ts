import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';

export const EnumWorkTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWorkTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => WorkTypeSchema).optional(),
});

export default EnumWorkTypeFieldUpdateOperationsInputSchema;
