import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventWhereUniqueInputSchema } from './AttendanceEventWhereUniqueInputSchema';
import { AttendanceEventUpdateWithoutStaffInputSchema } from './AttendanceEventUpdateWithoutStaffInputSchema';
import { AttendanceEventUncheckedUpdateWithoutStaffInputSchema } from './AttendanceEventUncheckedUpdateWithoutStaffInputSchema';
import { AttendanceEventCreateWithoutStaffInputSchema } from './AttendanceEventCreateWithoutStaffInputSchema';
import { AttendanceEventUncheckedCreateWithoutStaffInputSchema } from './AttendanceEventUncheckedCreateWithoutStaffInputSchema';

export const AttendanceEventUpsertWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceEventUpsertWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => AttendanceEventWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AttendanceEventUpdateWithoutStaffInputSchema), z.lazy(() => AttendanceEventUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => AttendanceEventCreateWithoutStaffInputSchema), z.lazy(() => AttendanceEventUncheckedCreateWithoutStaffInputSchema) ]),
});

export default AttendanceEventUpsertWithWhereUniqueWithoutStaffInputSchema;
