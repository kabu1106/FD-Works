import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceCreateWithoutDepartmentInputSchema } from './AttendanceCreateWithoutDepartmentInputSchema';
import { AttendanceUncheckedCreateWithoutDepartmentInputSchema } from './AttendanceUncheckedCreateWithoutDepartmentInputSchema';

export const AttendanceCreateOrConnectWithoutDepartmentInputSchema: z.ZodType<Prisma.AttendanceCreateOrConnectWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutDepartmentInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutDepartmentInputSchema) ]),
});

export default AttendanceCreateOrConnectWithoutDepartmentInputSchema;
