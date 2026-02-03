import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftDayCreateManyWorkShiftInputSchema } from './WorkShiftDayCreateManyWorkShiftInputSchema';

export const WorkShiftDayCreateManyWorkShiftInputEnvelopeSchema: z.ZodType<Prisma.WorkShiftDayCreateManyWorkShiftInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => WorkShiftDayCreateManyWorkShiftInputSchema), z.lazy(() => WorkShiftDayCreateManyWorkShiftInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default WorkShiftDayCreateManyWorkShiftInputEnvelopeSchema;
