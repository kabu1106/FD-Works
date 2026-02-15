import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventCreateManyStaffInputSchema } from './AttendanceEventCreateManyStaffInputSchema';

export const AttendanceEventCreateManyStaffInputEnvelopeSchema: z.ZodType<Prisma.AttendanceEventCreateManyStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AttendanceEventCreateManyStaffInputSchema), z.lazy(() => AttendanceEventCreateManyStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default AttendanceEventCreateManyStaffInputEnvelopeSchema;
