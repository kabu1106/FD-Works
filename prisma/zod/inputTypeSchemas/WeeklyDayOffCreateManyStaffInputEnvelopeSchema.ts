import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeeklyDayOffCreateManyStaffInputSchema } from './WeeklyDayOffCreateManyStaffInputSchema';

export const WeeklyDayOffCreateManyStaffInputEnvelopeSchema: z.ZodType<Prisma.WeeklyDayOffCreateManyStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => WeeklyDayOffCreateManyStaffInputSchema), z.lazy(() => WeeklyDayOffCreateManyStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default WeeklyDayOffCreateManyStaffInputEnvelopeSchema;
