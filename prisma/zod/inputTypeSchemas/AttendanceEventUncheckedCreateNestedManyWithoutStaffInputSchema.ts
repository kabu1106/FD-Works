import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventCreateWithoutStaffInputSchema } from './AttendanceEventCreateWithoutStaffInputSchema';
import { AttendanceEventUncheckedCreateWithoutStaffInputSchema } from './AttendanceEventUncheckedCreateWithoutStaffInputSchema';
import { AttendanceEventCreateOrConnectWithoutStaffInputSchema } from './AttendanceEventCreateOrConnectWithoutStaffInputSchema';
import { AttendanceEventCreateManyStaffInputEnvelopeSchema } from './AttendanceEventCreateManyStaffInputEnvelopeSchema';
import { AttendanceEventWhereUniqueInputSchema } from './AttendanceEventWhereUniqueInputSchema';

export const AttendanceEventUncheckedCreateNestedManyWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceEventUncheckedCreateNestedManyWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttendanceEventCreateWithoutStaffInputSchema), z.lazy(() => AttendanceEventCreateWithoutStaffInputSchema).array(), z.lazy(() => AttendanceEventUncheckedCreateWithoutStaffInputSchema), z.lazy(() => AttendanceEventUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceEventCreateOrConnectWithoutStaffInputSchema), z.lazy(() => AttendanceEventCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceEventCreateManyStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceEventWhereUniqueInputSchema), z.lazy(() => AttendanceEventWhereUniqueInputSchema).array() ]).optional(),
});

export default AttendanceEventUncheckedCreateNestedManyWithoutStaffInputSchema;
