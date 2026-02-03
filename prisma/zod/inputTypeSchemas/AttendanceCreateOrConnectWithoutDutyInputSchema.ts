import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereUniqueInputSchema } from './AttendanceWhereUniqueInputSchema';
import { AttendanceCreateWithoutDutyInputSchema } from './AttendanceCreateWithoutDutyInputSchema';
import { AttendanceUncheckedCreateWithoutDutyInputSchema } from './AttendanceUncheckedCreateWithoutDutyInputSchema';

export const AttendanceCreateOrConnectWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceCreateOrConnectWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutDutyInputSchema), z.lazy(() => AttendanceUncheckedCreateWithoutDutyInputSchema) ]),
});

export default AttendanceCreateOrConnectWithoutDutyInputSchema;
