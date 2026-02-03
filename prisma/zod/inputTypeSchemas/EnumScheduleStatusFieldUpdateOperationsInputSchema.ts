import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';

export const EnumScheduleStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumScheduleStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => ScheduleStatusSchema).optional(),
});

export default EnumScheduleStatusFieldUpdateOperationsInputSchema;
