import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventWhereUniqueInputSchema } from './AttendanceEventWhereUniqueInputSchema';
import { AttendanceEventUpdateWithoutDutyInputSchema } from './AttendanceEventUpdateWithoutDutyInputSchema';
import { AttendanceEventUncheckedUpdateWithoutDutyInputSchema } from './AttendanceEventUncheckedUpdateWithoutDutyInputSchema';
import { AttendanceEventCreateWithoutDutyInputSchema } from './AttendanceEventCreateWithoutDutyInputSchema';
import { AttendanceEventUncheckedCreateWithoutDutyInputSchema } from './AttendanceEventUncheckedCreateWithoutDutyInputSchema';

export const AttendanceEventUpsertWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceEventUpsertWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => AttendanceEventWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AttendanceEventUpdateWithoutDutyInputSchema), z.lazy(() => AttendanceEventUncheckedUpdateWithoutDutyInputSchema) ]),
  create: z.union([ z.lazy(() => AttendanceEventCreateWithoutDutyInputSchema), z.lazy(() => AttendanceEventUncheckedCreateWithoutDutyInputSchema) ]),
});

export default AttendanceEventUpsertWithWhereUniqueWithoutDutyInputSchema;
