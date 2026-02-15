import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventCreateWithoutDutyInputSchema } from './AttendanceEventCreateWithoutDutyInputSchema';
import { AttendanceEventUncheckedCreateWithoutDutyInputSchema } from './AttendanceEventUncheckedCreateWithoutDutyInputSchema';
import { AttendanceEventCreateOrConnectWithoutDutyInputSchema } from './AttendanceEventCreateOrConnectWithoutDutyInputSchema';
import { AttendanceEventCreateManyDutyInputEnvelopeSchema } from './AttendanceEventCreateManyDutyInputEnvelopeSchema';
import { AttendanceEventWhereUniqueInputSchema } from './AttendanceEventWhereUniqueInputSchema';

export const AttendanceEventCreateNestedManyWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceEventCreateNestedManyWithoutDutyInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttendanceEventCreateWithoutDutyInputSchema), z.lazy(() => AttendanceEventCreateWithoutDutyInputSchema).array(), z.lazy(() => AttendanceEventUncheckedCreateWithoutDutyInputSchema), z.lazy(() => AttendanceEventUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceEventCreateOrConnectWithoutDutyInputSchema), z.lazy(() => AttendanceEventCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceEventCreateManyDutyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceEventWhereUniqueInputSchema), z.lazy(() => AttendanceEventWhereUniqueInputSchema).array() ]).optional(),
});

export default AttendanceEventCreateNestedManyWithoutDutyInputSchema;
