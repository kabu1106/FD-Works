import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { DutyUpdateWithoutAttendanceEventsInputSchema } from './DutyUpdateWithoutAttendanceEventsInputSchema';
import { DutyUncheckedUpdateWithoutAttendanceEventsInputSchema } from './DutyUncheckedUpdateWithoutAttendanceEventsInputSchema';

export const DutyUpdateToOneWithWhereWithoutAttendanceEventsInputSchema: z.ZodType<Prisma.DutyUpdateToOneWithWhereWithoutAttendanceEventsInput> = z.strictObject({
  where: z.lazy(() => DutyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DutyUpdateWithoutAttendanceEventsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutAttendanceEventsInputSchema) ]),
});

export default DutyUpdateToOneWithWhereWithoutAttendanceEventsInputSchema;
