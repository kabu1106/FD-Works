import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventCreateManyDutyInputSchema } from './AttendanceEventCreateManyDutyInputSchema';

export const AttendanceEventCreateManyDutyInputEnvelopeSchema: z.ZodType<Prisma.AttendanceEventCreateManyDutyInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AttendanceEventCreateManyDutyInputSchema), z.lazy(() => AttendanceEventCreateManyDutyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default AttendanceEventCreateManyDutyInputEnvelopeSchema;
