import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventCreateWithoutStaffInputSchema } from './AttendanceEventCreateWithoutStaffInputSchema';
import { AttendanceEventUncheckedCreateWithoutStaffInputSchema } from './AttendanceEventUncheckedCreateWithoutStaffInputSchema';
import { AttendanceEventCreateOrConnectWithoutStaffInputSchema } from './AttendanceEventCreateOrConnectWithoutStaffInputSchema';
import { AttendanceEventUpsertWithWhereUniqueWithoutStaffInputSchema } from './AttendanceEventUpsertWithWhereUniqueWithoutStaffInputSchema';
import { AttendanceEventCreateManyStaffInputEnvelopeSchema } from './AttendanceEventCreateManyStaffInputEnvelopeSchema';
import { AttendanceEventWhereUniqueInputSchema } from './AttendanceEventWhereUniqueInputSchema';
import { AttendanceEventUpdateWithWhereUniqueWithoutStaffInputSchema } from './AttendanceEventUpdateWithWhereUniqueWithoutStaffInputSchema';
import { AttendanceEventUpdateManyWithWhereWithoutStaffInputSchema } from './AttendanceEventUpdateManyWithWhereWithoutStaffInputSchema';
import { AttendanceEventScalarWhereInputSchema } from './AttendanceEventScalarWhereInputSchema';

export const AttendanceEventUncheckedUpdateManyWithoutStaffNestedInputSchema: z.ZodType<Prisma.AttendanceEventUncheckedUpdateManyWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttendanceEventCreateWithoutStaffInputSchema), z.lazy(() => AttendanceEventCreateWithoutStaffInputSchema).array(), z.lazy(() => AttendanceEventUncheckedCreateWithoutStaffInputSchema), z.lazy(() => AttendanceEventUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceEventCreateOrConnectWithoutStaffInputSchema), z.lazy(() => AttendanceEventCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceEventUpsertWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => AttendanceEventUpsertWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceEventCreateManyStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceEventWhereUniqueInputSchema), z.lazy(() => AttendanceEventWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceEventWhereUniqueInputSchema), z.lazy(() => AttendanceEventWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceEventWhereUniqueInputSchema), z.lazy(() => AttendanceEventWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceEventWhereUniqueInputSchema), z.lazy(() => AttendanceEventWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceEventUpdateWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => AttendanceEventUpdateWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceEventUpdateManyWithWhereWithoutStaffInputSchema), z.lazy(() => AttendanceEventUpdateManyWithWhereWithoutStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceEventScalarWhereInputSchema), z.lazy(() => AttendanceEventScalarWhereInputSchema).array() ]).optional(),
});

export default AttendanceEventUncheckedUpdateManyWithoutStaffNestedInputSchema;
