import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceCreateManyStaffInputSchema } from './AttendanceCreateManyStaffInputSchema';

export const AttendanceCreateManyStaffInputEnvelopeSchema: z.ZodType<Prisma.AttendanceCreateManyStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AttendanceCreateManyStaffInputSchema), z.lazy(() => AttendanceCreateManyStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default AttendanceCreateManyStaffInputEnvelopeSchema;
