import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceCreateWithoutStaffInputSchema } from './AttendanceCreateWithoutStaffInputSchema';
import { AttendanceUncheckedCreateWithoutStaffInputSchema } from './AttendanceUncheckedCreateWithoutStaffInputSchema';
import { AttendanceCreateOrConnectWithoutStaffInputSchema } from './AttendanceCreateOrConnectWithoutStaffInputSchema';
import { AttendanceUpsertWithWhereUniqueWithoutStaffInputSchema } from './AttendanceUpsertWithWhereUniqueWithoutStaffInputSchema';
import { AttendanceCreateManyStaffInputEnvelopeSchema } from './AttendanceCreateManyStaffInputEnvelopeSchema';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceUpdateWithWhereUniqueWithoutStaffInputSchema } from './AttendanceUpdateWithWhereUniqueWithoutStaffInputSchema';
import { AttendanceUpdateManyWithWhereWithoutStaffInputSchema } from './AttendanceUpdateManyWithWhereWithoutStaffInputSchema';
import { AttendanceScalarWhereInputSchema } from './AttendanceScalarWhereInputSchema';

export const AttendanceUpdateManyWithoutStaffNestedInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutStaffInputSchema), z.lazy(() => AttendanceCreateWithoutStaffInputSchema).array(), z.lazy(() => AttendanceUncheckedCreateWithoutStaffInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutStaffInputSchema), z.lazy(() => AttendanceCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutStaffInputSchema), z.lazy(() => AttendanceUpdateManyWithWhereWithoutStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema), z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
});

export default AttendanceUpdateManyWithoutStaffNestedInputSchema;
