import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutAttendanceEventsInputSchema } from './DutyCreateWithoutAttendanceEventsInputSchema';
import { DutyUncheckedCreateWithoutAttendanceEventsInputSchema } from './DutyUncheckedCreateWithoutAttendanceEventsInputSchema';
import { DutyCreateOrConnectWithoutAttendanceEventsInputSchema } from './DutyCreateOrConnectWithoutAttendanceEventsInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';

export const DutyCreateNestedOneWithoutAttendanceEventsInputSchema: z.ZodType<Prisma.DutyCreateNestedOneWithoutAttendanceEventsInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutAttendanceEventsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutAttendanceEventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutAttendanceEventsInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
});

export default DutyCreateNestedOneWithoutAttendanceEventsInputSchema;
