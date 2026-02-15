import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyCreateWithoutAttendanceEventsInputSchema } from './DutyCreateWithoutAttendanceEventsInputSchema';
import { DutyUncheckedCreateWithoutAttendanceEventsInputSchema } from './DutyUncheckedCreateWithoutAttendanceEventsInputSchema';

export const DutyCreateOrConnectWithoutAttendanceEventsInputSchema: z.ZodType<Prisma.DutyCreateOrConnectWithoutAttendanceEventsInput> = z.strictObject({
  where: z.lazy(() => DutyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DutyCreateWithoutAttendanceEventsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutAttendanceEventsInputSchema) ]),
});

export default DutyCreateOrConnectWithoutAttendanceEventsInputSchema;
