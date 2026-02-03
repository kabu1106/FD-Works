import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceUpdateWithoutDutyInputSchema } from './AttendanceUpdateWithoutDutyInputSchema';
import { AttendanceUncheckedUpdateWithoutDutyInputSchema } from './AttendanceUncheckedUpdateWithoutDutyInputSchema';
import { AttendanceCreateWithoutDutyInputSchema } from './AttendanceCreateWithoutDutyInputSchema';
import { AttendanceUncheckedCreateWithoutDutyInputSchema } from './AttendanceUncheckedCreateWithoutDutyInputSchema';

export const AttendanceUpsertWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceUpsertWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AttendanceUpdateWithoutDutyInputSchema), z.lazy(() => AttendanceUncheckedUpdateWithoutDutyInputSchema) ]),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutDutyInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutDutyInputSchema) ]),
});

export default AttendanceUpsertWithWhereUniqueWithoutDutyInputSchema;
