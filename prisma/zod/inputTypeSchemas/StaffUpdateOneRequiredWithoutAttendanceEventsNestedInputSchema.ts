import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutAttendanceEventsInputSchema } from './StaffCreateWithoutAttendanceEventsInputSchema';
import { StaffUncheckedCreateWithoutAttendanceEventsInputSchema } from './StaffUncheckedCreateWithoutAttendanceEventsInputSchema';
import { StaffCreateOrConnectWithoutAttendanceEventsInputSchema } from './StaffCreateOrConnectWithoutAttendanceEventsInputSchema';
import { StaffUpsertWithoutAttendanceEventsInputSchema } from './StaffUpsertWithoutAttendanceEventsInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutAttendanceEventsInputSchema } from './StaffUpdateToOneWithWhereWithoutAttendanceEventsInputSchema';
import { StaffUpdateWithoutAttendanceEventsInputSchema } from './StaffUpdateWithoutAttendanceEventsInputSchema';
import { StaffUncheckedUpdateWithoutAttendanceEventsInputSchema } from './StaffUncheckedUpdateWithoutAttendanceEventsInputSchema';

export const StaffUpdateOneRequiredWithoutAttendanceEventsNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneRequiredWithoutAttendanceEventsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutAttendanceEventsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutAttendanceEventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutAttendanceEventsInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutAttendanceEventsInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutAttendanceEventsInputSchema), z.lazy(() => StaffUpdateWithoutAttendanceEventsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutAttendanceEventsInputSchema) ]).optional(),
});

export default StaffUpdateOneRequiredWithoutAttendanceEventsNestedInputSchema;
