import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationTypeSchema } from './LocationTypeSchema';

export const EnumLocationTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLocationTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => LocationTypeSchema).optional(),
});

export default EnumLocationTypeFieldUpdateOperationsInputSchema;
