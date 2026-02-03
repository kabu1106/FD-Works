import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceCreateManyDepartmentInputSchema } from './AttendanceCreateManyDepartmentInputSchema';

export const AttendanceCreateManyDepartmentInputEnvelopeSchema: z.ZodType<Prisma.AttendanceCreateManyDepartmentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AttendanceCreateManyDepartmentInputSchema), z.lazy(() => AttendanceCreateManyDepartmentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default AttendanceCreateManyDepartmentInputEnvelopeSchema;
