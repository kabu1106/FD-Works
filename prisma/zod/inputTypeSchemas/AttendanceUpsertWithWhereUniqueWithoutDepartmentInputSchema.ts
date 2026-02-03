import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceUpdateWithoutDepartmentInputSchema } from './AttendanceUpdateWithoutDepartmentInputSchema';
import { AttendanceUncheckedUpdateWithoutDepartmentInputSchema } from './AttendanceUncheckedUpdateWithoutDepartmentInputSchema';
import { AttendanceCreateWithoutDepartmentInputSchema } from './AttendanceCreateWithoutDepartmentInputSchema';
import { AttendanceUncheckedCreateWithoutDepartmentInputSchema } from './AttendanceUncheckedCreateWithoutDepartmentInputSchema';

export const AttendanceUpsertWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.AttendanceUpsertWithWhereUniqueWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AttendanceUpdateWithoutDepartmentInputSchema), z.lazy(() => AttendanceUncheckedUpdateWithoutDepartmentInputSchema) ]),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutDepartmentInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutDepartmentInputSchema) ]),
});

export default AttendanceUpsertWithWhereUniqueWithoutDepartmentInputSchema;
