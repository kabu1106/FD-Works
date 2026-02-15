import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventWhereUniqueInputSchema } from './AttendanceEventWhereUniqueInputSchema';
import { AttendanceEventCreateWithoutStaffInputSchema } from './AttendanceEventCreateWithoutStaffInputSchema';
import { AttendanceEventUncheckedCreateWithoutStaffInputSchema } from './AttendanceEventUncheckedCreateWithoutStaffInputSchema';

export const AttendanceEventCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceEventCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => AttendanceEventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AttendanceEventCreateWithoutStaffInputSchema), z.lazy(() => AttendanceEventUncheckedCreateWithoutStaffInputSchema) ]),
});

export default AttendanceEventCreateOrConnectWithoutStaffInputSchema;
