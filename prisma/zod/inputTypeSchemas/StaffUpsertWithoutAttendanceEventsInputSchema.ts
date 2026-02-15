import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutAttendanceEventsInputSchema } from './StaffUpdateWithoutAttendanceEventsInputSchema';
import { StaffUncheckedUpdateWithoutAttendanceEventsInputSchema } from './StaffUncheckedUpdateWithoutAttendanceEventsInputSchema';
import { StaffCreateWithoutAttendanceEventsInputSchema } from './StaffCreateWithoutAttendanceEventsInputSchema';
import { StaffUncheckedCreateWithoutAttendanceEventsInputSchema } from './StaffUncheckedCreateWithoutAttendanceEventsInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutAttendanceEventsInputSchema: z.ZodType<Prisma.StaffUpsertWithoutAttendanceEventsInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutAttendanceEventsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutAttendanceEventsInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutAttendanceEventsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutAttendanceEventsInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutAttendanceEventsInputSchema;
