import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceCreateWithoutDepartmentInputSchema } from './AttendanceCreateWithoutDepartmentInputSchema';
import { AttendanceUncheckedCreateWithoutDepartmentInputSchema } from './AttendanceUncheckedCreateWithoutDepartmentInputSchema';
import { AttendanceCreateOrConnectWithoutDepartmentInputSchema } from './AttendanceCreateOrConnectWithoutDepartmentInputSchema';
import { AttendanceCreateManyDepartmentInputEnvelopeSchema } from './AttendanceCreateManyDepartmentInputEnvelopeSchema';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';

export const AttendanceUncheckedCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateNestedManyWithoutDepartmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutDepartmentInputSchema), z.lazy(() => AttendanceCreateWithoutDepartmentInputSchema).array(), z.lazy(() => AttendanceUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => AttendanceCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyDepartmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
});

export default AttendanceUncheckedCreateNestedManyWithoutDepartmentInputSchema;
