import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventWhereUniqueInputSchema } from './AttendanceEventWhereUniqueInputSchema';
import { AttendanceEventUpdateWithoutStaffInputSchema } from './AttendanceEventUpdateWithoutStaffInputSchema';
import { AttendanceEventUncheckedUpdateWithoutStaffInputSchema } from './AttendanceEventUncheckedUpdateWithoutStaffInputSchema';

export const AttendanceEventUpdateWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceEventUpdateWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => AttendanceEventWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AttendanceEventUpdateWithoutStaffInputSchema), z.lazy(() => AttendanceEventUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default AttendanceEventUpdateWithWhereUniqueWithoutStaffInputSchema;
