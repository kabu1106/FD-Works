import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceCreateWithoutDutyInputSchema } from './AttendanceCreateWithoutDutyInputSchema';
import { AttendanceUncheckedCreateWithoutDutyInputSchema } from './AttendanceUncheckedCreateWithoutDutyInputSchema';
import { AttendanceCreateOrConnectWithoutDutyInputSchema } from './AttendanceCreateOrConnectWithoutDutyInputSchema';
import { AttendanceCreateManyDutyInputEnvelopeSchema } from './AttendanceCreateManyDutyInputEnvelopeSchema';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';

export const AttendanceCreateNestedManyWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceCreateNestedManyWithoutDutyInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutDutyInputSchema), z.lazy(() => AttendanceCreateWithoutDutyInputSchema).array(), z.lazy(() => AttendanceUncheckedCreateWithoutDutyInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutDutyInputSchema), z.lazy(() => AttendanceCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyDutyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
});

export default AttendanceCreateNestedManyWithoutDutyInputSchema;
