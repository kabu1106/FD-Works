import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutAttendanceEventsInputSchema } from './DutyCreateWithoutAttendanceEventsInputSchema';
import { DutyUncheckedCreateWithoutAttendanceEventsInputSchema } from './DutyUncheckedCreateWithoutAttendanceEventsInputSchema';
import { DutyCreateOrConnectWithoutAttendanceEventsInputSchema } from './DutyCreateOrConnectWithoutAttendanceEventsInputSchema';
import { DutyUpsertWithoutAttendanceEventsInputSchema } from './DutyUpsertWithoutAttendanceEventsInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyUpdateToOneWithWhereWithoutAttendanceEventsInputSchema } from './DutyUpdateToOneWithWhereWithoutAttendanceEventsInputSchema';
import { DutyUpdateWithoutAttendanceEventsInputSchema } from './DutyUpdateWithoutAttendanceEventsInputSchema';
import { DutyUncheckedUpdateWithoutAttendanceEventsInputSchema } from './DutyUncheckedUpdateWithoutAttendanceEventsInputSchema';

export const DutyUpdateOneRequiredWithoutAttendanceEventsNestedInputSchema: z.ZodType<Prisma.DutyUpdateOneRequiredWithoutAttendanceEventsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutAttendanceEventsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutAttendanceEventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutAttendanceEventsInputSchema).optional(),
  upsert: z.lazy(() => DutyUpsertWithoutAttendanceEventsInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DutyUpdateToOneWithWhereWithoutAttendanceEventsInputSchema), z.lazy(() => DutyUpdateWithoutAttendanceEventsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutAttendanceEventsInputSchema) ]).optional(),
});

export default DutyUpdateOneRequiredWithoutAttendanceEventsNestedInputSchema;
