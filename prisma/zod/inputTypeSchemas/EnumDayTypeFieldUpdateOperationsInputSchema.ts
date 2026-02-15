import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DayTypeSchema } from './DayTypeSchema';

export const EnumDayTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDayTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => DayTypeSchema).optional(),
});

export default EnumDayTypeFieldUpdateOperationsInputSchema;
