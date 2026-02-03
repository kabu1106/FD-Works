import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceCreateWithoutDepartmentInputSchema } from './AttendanceCreateWithoutDepartmentInputSchema';
import { AttendanceUncheckedCreateWithoutDepartmentInputSchema } from './AttendanceUncheckedCreateWithoutDepartmentInputSchema';
import { AttendanceCreateOrConnectWithoutDepartmentInputSchema } from './AttendanceCreateOrConnectWithoutDepartmentInputSchema';
import { AttendanceUpsertWithWhereUniqueWithoutDepartmentInputSchema } from './AttendanceUpsertWithWhereUniqueWithoutDepartmentInputSchema';
import { AttendanceCreateManyDepartmentInputEnvelopeSchema } from './AttendanceCreateManyDepartmentInputEnvelopeSchema';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceUpdateWithWhereUniqueWithoutDepartmentInputSchema } from './AttendanceUpdateWithWhereUniqueWithoutDepartmentInputSchema';
import { AttendanceUpdateManyWithWhereWithoutDepartmentInputSchema } from './AttendanceUpdateManyWithWhereWithoutDepartmentInputSchema';
import { AttendanceScalarWhereInputSchema } from './AttendanceScalarWhereInputSchema';

export const AttendanceUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithoutDepartmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutDepartmentInputSchema), z.lazy(() => AttendanceCreateWithoutDepartmentInputSchema).array(), z.lazy(() => AttendanceUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => AttendanceCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyDepartmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutDepartmentInputSchema), z.lazy(() => AttendanceUpdateManyWithWhereWithoutDepartmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema), z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
});

export default AttendanceUpdateManyWithoutDepartmentNestedInputSchema;
