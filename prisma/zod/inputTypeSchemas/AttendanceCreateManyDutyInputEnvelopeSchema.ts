import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceCreateManyDutyInputSchema } from './AttendanceCreateManyDutyInputSchema';

export const AttendanceCreateManyDutyInputEnvelopeSchema: z.ZodType<Prisma.AttendanceCreateManyDutyInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AttendanceCreateManyDutyInputSchema), z.lazy(() => AttendanceCreateManyDutyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default AttendanceCreateManyDutyInputEnvelopeSchema;
