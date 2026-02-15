import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventWhereUniqueInputSchema } from './AttendanceEventWhereUniqueInputSchema';
import { AttendanceEventCreateWithoutDutyInputSchema } from './AttendanceEventCreateWithoutDutyInputSchema';
import { AttendanceEventUncheckedCreateWithoutDutyInputSchema } from './AttendanceEventUncheckedCreateWithoutDutyInputSchema';

export const AttendanceEventCreateOrConnectWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceEventCreateOrConnectWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => AttendanceEventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AttendanceEventCreateWithoutDutyInputSchema), z.lazy(() => AttendanceEventUncheckedCreateWithoutDutyInputSchema) ]),
});

export default AttendanceEventCreateOrConnectWithoutDutyInputSchema;
