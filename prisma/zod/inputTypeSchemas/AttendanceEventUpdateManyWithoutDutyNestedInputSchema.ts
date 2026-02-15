import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventCreateWithoutDutyInputSchema } from './AttendanceEventCreateWithoutDutyInputSchema';
import { AttendanceEventUncheckedCreateWithoutDutyInputSchema } from './AttendanceEventUncheckedCreateWithoutDutyInputSchema';
import { AttendanceEventCreateOrConnectWithoutDutyInputSchema } from './AttendanceEventCreateOrConnectWithoutDutyInputSchema';
import { AttendanceEventUpsertWithWhereUniqueWithoutDutyInputSchema } from './AttendanceEventUpsertWithWhereUniqueWithoutDutyInputSchema';
import { AttendanceEventCreateManyDutyInputEnvelopeSchema } from './AttendanceEventCreateManyDutyInputEnvelopeSchema';
import { AttendanceEventWhereUniqueInputSchema } from './AttendanceEventWhereUniqueInputSchema';
import { AttendanceEventUpdateWithWhereUniqueWithoutDutyInputSchema } from './AttendanceEventUpdateWithWhereUniqueWithoutDutyInputSchema';
import { AttendanceEventUpdateManyWithWhereWithoutDutyInputSchema } from './AttendanceEventUpdateManyWithWhereWithoutDutyInputSchema';
import { AttendanceEventScalarWhereInputSchema } from './AttendanceEventScalarWhereInputSchema';

export const AttendanceEventUpdateManyWithoutDutyNestedInputSchema: z.ZodType<Prisma.AttendanceEventUpdateManyWithoutDutyNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttendanceEventCreateWithoutDutyInputSchema), z.lazy(() => AttendanceEventCreateWithoutDutyInputSchema).array(), z.lazy(() => AttendanceEventUncheckedCreateWithoutDutyInputSchema), z.lazy(() => AttendanceEventUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceEventCreateOrConnectWithoutDutyInputSchema), z.lazy(() => AttendanceEventCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceEventUpsertWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => AttendanceEventUpsertWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceEventCreateManyDutyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceEventWhereUniqueInputSchema), z.lazy(() => AttendanceEventWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceEventWhereUniqueInputSchema), z.lazy(() => AttendanceEventWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceEventWhereUniqueInputSchema), z.lazy(() => AttendanceEventWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceEventWhereUniqueInputSchema), z.lazy(() => AttendanceEventWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceEventUpdateWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => AttendanceEventUpdateWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceEventUpdateManyWithWhereWithoutDutyInputSchema), z.lazy(() => AttendanceEventUpdateManyWithWhereWithoutDutyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceEventScalarWhereInputSchema), z.lazy(() => AttendanceEventScalarWhereInputSchema).array() ]).optional(),
});

export default AttendanceEventUpdateManyWithoutDutyNestedInputSchema;
