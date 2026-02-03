import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceCreateWithoutDutyInputSchema } from './AttendanceCreateWithoutDutyInputSchema';
import { AttendanceUncheckedCreateWithoutDutyInputSchema } from './AttendanceUncheckedCreateWithoutDutyInputSchema';
import { AttendanceCreateOrConnectWithoutDutyInputSchema } from './AttendanceCreateOrConnectWithoutDutyInputSchema';
import { AttendanceUpsertWithWhereUniqueWithoutDutyInputSchema } from './AttendanceUpsertWithWhereUniqueWithoutDutyInputSchema';
import { AttendanceCreateManyDutyInputEnvelopeSchema } from './AttendanceCreateManyDutyInputEnvelopeSchema';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceUpdateWithWhereUniqueWithoutDutyInputSchema } from './AttendanceUpdateWithWhereUniqueWithoutDutyInputSchema';
import { AttendanceUpdateManyWithWhereWithoutDutyInputSchema } from './AttendanceUpdateManyWithWhereWithoutDutyInputSchema';
import { AttendanceScalarWhereInputSchema } from './AttendanceScalarWhereInputSchema';

export const AttendanceUncheckedUpdateManyWithoutDutyNestedInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutDutyNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutDutyInputSchema), z.lazy(() => AttendanceCreateWithoutDutyInputSchema).array(), z.lazy(() => AttendanceUncheckedCreateWithoutDutyInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutDutyInputSchema), z.lazy(() => AttendanceCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyDutyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutDutyInputSchema), z.lazy(() => AttendanceUpdateManyWithWhereWithoutDutyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema), z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
});

export default AttendanceUncheckedUpdateManyWithoutDutyNestedInputSchema;
