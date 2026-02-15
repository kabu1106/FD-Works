import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutAttendanceEventsInputSchema } from './StaffCreateWithoutAttendanceEventsInputSchema';
import { StaffUncheckedCreateWithoutAttendanceEventsInputSchema } from './StaffUncheckedCreateWithoutAttendanceEventsInputSchema';
import { StaffCreateOrConnectWithoutAttendanceEventsInputSchema } from './StaffCreateOrConnectWithoutAttendanceEventsInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutAttendanceEventsInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutAttendanceEventsInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutAttendanceEventsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutAttendanceEventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutAttendanceEventsInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutAttendanceEventsInputSchema;
