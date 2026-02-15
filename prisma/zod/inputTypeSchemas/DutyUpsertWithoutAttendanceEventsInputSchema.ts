import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyUpdateWithoutAttendanceEventsInputSchema } from './DutyUpdateWithoutAttendanceEventsInputSchema';
import { DutyUncheckedUpdateWithoutAttendanceEventsInputSchema } from './DutyUncheckedUpdateWithoutAttendanceEventsInputSchema';
import { DutyCreateWithoutAttendanceEventsInputSchema } from './DutyCreateWithoutAttendanceEventsInputSchema';
import { DutyUncheckedCreateWithoutAttendanceEventsInputSchema } from './DutyUncheckedCreateWithoutAttendanceEventsInputSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';

export const DutyUpsertWithoutAttendanceEventsInputSchema: z.ZodType<Prisma.DutyUpsertWithoutAttendanceEventsInput> = z.strictObject({
  update: z.union([ z.lazy(() => DutyUpdateWithoutAttendanceEventsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutAttendanceEventsInputSchema) ]),
  create: z.union([ z.lazy(() => DutyCreateWithoutAttendanceEventsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutAttendanceEventsInputSchema) ]),
  where: z.lazy(() => DutyWhereInputSchema).optional(),
});

export default DutyUpsertWithoutAttendanceEventsInputSchema;
