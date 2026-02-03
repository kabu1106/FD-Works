import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceUpdateWithoutDepartmentInputSchema } from './AttendanceUpdateWithoutDepartmentInputSchema';
import { AttendanceUncheckedUpdateWithoutDepartmentInputSchema } from './AttendanceUncheckedUpdateWithoutDepartmentInputSchema';

export const AttendanceUpdateWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.AttendanceUpdateWithWhereUniqueWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateWithoutDepartmentInputSchema), z.lazy(() => AttendanceUncheckedUpdateWithoutDepartmentInputSchema) ]),
});

export default AttendanceUpdateWithWhereUniqueWithoutDepartmentInputSchema;
