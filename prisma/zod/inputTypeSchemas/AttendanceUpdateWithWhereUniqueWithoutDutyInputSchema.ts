import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceUpdateWithoutDutyInputSchema } from './AttendanceUpdateWithoutDutyInputSchema';
import { AttendanceUncheckedUpdateWithoutDutyInputSchema } from './AttendanceUncheckedUpdateWithoutDutyInputSchema';

export const AttendanceUpdateWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceUpdateWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateWithoutDutyInputSchema), z.lazy(() => AttendanceUncheckedUpdateWithoutDutyInputSchema) ]),
});

export default AttendanceUpdateWithWhereUniqueWithoutDutyInputSchema;
