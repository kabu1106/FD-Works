import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceUpdateWithoutStaffInputSchema } from './AttendanceUpdateWithoutStaffInputSchema';
import { AttendanceUncheckedUpdateWithoutStaffInputSchema } from './AttendanceUncheckedUpdateWithoutStaffInputSchema';
import { AttendanceCreateWithoutStaffInputSchema } from './AttendanceCreateWithoutStaffInputSchema';
import { AttendanceUncheckedCreateWithoutStaffInputSchema } from './AttendanceUncheckedCreateWithoutStaffInputSchema';

export const AttendanceUpsertWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceUpsertWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AttendanceUpdateWithoutStaffInputSchema), z.lazy(() => AttendanceUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutStaffInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutStaffInputSchema) ]),
});

export default AttendanceUpsertWithWhereUniqueWithoutStaffInputSchema;
