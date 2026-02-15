import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutAttendanceEventsInputSchema } from './StaffCreateWithoutAttendanceEventsInputSchema';
import { StaffUncheckedCreateWithoutAttendanceEventsInputSchema } from './StaffUncheckedCreateWithoutAttendanceEventsInputSchema';

export const StaffCreateOrConnectWithoutAttendanceEventsInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutAttendanceEventsInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutAttendanceEventsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutAttendanceEventsInputSchema) ]),
});

export default StaffCreateOrConnectWithoutAttendanceEventsInputSchema;
