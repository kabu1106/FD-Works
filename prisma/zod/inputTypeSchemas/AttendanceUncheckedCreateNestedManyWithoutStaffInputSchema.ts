import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceCreateWithoutStaffInputSchema } from './AttendanceCreateWithoutStaffInputSchema';
import { AttendanceUncheckedCreateWithoutStaffInputSchema } from './AttendanceUncheckedCreateWithoutStaffInputSchema';
import { AttendanceCreateOrConnectWithoutStaffInputSchema } from './AttendanceCreateOrConnectWithoutStaffInputSchema';
import { AttendanceCreateManyStaffInputEnvelopeSchema } from './AttendanceCreateManyStaffInputEnvelopeSchema';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';

export const AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateNestedManyWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutStaffInputSchema), z.lazy(() => AttendanceCreateWithoutStaffInputSchema).array(), z.lazy(() => AttendanceUncheckedCreateWithoutStaffInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutStaffInputSchema), z.lazy(() => AttendanceCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema), z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
});

export default AttendanceUncheckedCreateNestedManyWithoutStaffInputSchema;
