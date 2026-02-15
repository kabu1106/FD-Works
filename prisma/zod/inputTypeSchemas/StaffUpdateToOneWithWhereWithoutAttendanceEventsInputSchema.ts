import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutAttendanceEventsInputSchema } from './StaffUpdateWithoutAttendanceEventsInputSchema';
import { StaffUncheckedUpdateWithoutAttendanceEventsInputSchema } from './StaffUncheckedUpdateWithoutAttendanceEventsInputSchema';

export const StaffUpdateToOneWithWhereWithoutAttendanceEventsInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutAttendanceEventsInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutAttendanceEventsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutAttendanceEventsInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutAttendanceEventsInputSchema;
