import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventWhereUniqueInputSchema } from './AttendanceEventWhereUniqueInputSchema';
import { AttendanceEventUpdateWithoutDutyInputSchema } from './AttendanceEventUpdateWithoutDutyInputSchema';
import { AttendanceEventUncheckedUpdateWithoutDutyInputSchema } from './AttendanceEventUncheckedUpdateWithoutDutyInputSchema';

export const AttendanceEventUpdateWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceEventUpdateWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => AttendanceEventWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AttendanceEventUpdateWithoutDutyInputSchema), z.lazy(() => AttendanceEventUncheckedUpdateWithoutDutyInputSchema) ]),
});

export default AttendanceEventUpdateWithWhereUniqueWithoutDutyInputSchema;
