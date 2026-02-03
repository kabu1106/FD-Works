import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';

export const EnumShiftTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumShiftTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => ShiftTypeSchema).optional(),
});

export default EnumShiftTypeFieldUpdateOperationsInputSchema;
