import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceUpdateWithoutStaffInputSchema } from './AttendanceUpdateWithoutStaffInputSchema';
import { AttendanceUncheckedUpdateWithoutStaffInputSchema } from './AttendanceUncheckedUpdateWithoutStaffInputSchema';

export const AttendanceUpdateWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceUpdateWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateWithoutStaffInputSchema), z.lazy(() => AttendanceUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default AttendanceUpdateWithWhereUniqueWithoutStaffInputSchema;
