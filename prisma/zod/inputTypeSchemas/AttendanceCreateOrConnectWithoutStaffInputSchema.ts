import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceCreateWithoutStaffInputSchema } from './AttendanceCreateWithoutStaffInputSchema';
import { AttendanceUncheckedCreateWithoutStaffInputSchema } from './AttendanceUncheckedCreateWithoutStaffInputSchema';

export const AttendanceCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutStaffInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutStaffInputSchema) ]),
});

export default AttendanceCreateOrConnectWithoutStaffInputSchema;
