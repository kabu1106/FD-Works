import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutAttendanceInputSchema } from './DutyCreateWithoutAttendanceInputSchema';
import { DutyUncheckedCreateWithoutAttendanceInputSchema } from './DutyUncheckedCreateWithoutAttendanceInputSchema';
import { DutyCreateOrConnectWithoutAttendanceInputSchema } from './DutyCreateOrConnectWithoutAttendanceInputSchema';
import { DutyUpsertWithoutAttendanceInputSchema } from './DutyUpsertWithoutAttendanceInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyUpdateToOneWithWhereWithoutAttendanceInputSchema } from './DutyUpdateToOneWithWhereWithoutAttendanceInputSchema';
import { DutyUpdateWithoutAttendanceInputSchema } from './DutyUpdateWithoutAttendanceInputSchema';
import { DutyUncheckedUpdateWithoutAttendanceInputSchema } from './DutyUncheckedUpdateWithoutAttendanceInputSchema';

export const DutyUpdateOneRequiredWithoutAttendanceNestedInputSchema: z.ZodType<Prisma.DutyUpdateOneRequiredWithoutAttendanceNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutAttendanceInputSchema), z.lazy(() => DutyUncheckedCreateWithoutAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutAttendanceInputSchema).optional(),
  upsert: z.lazy(() => DutyUpsertWithoutAttendanceInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DutyUpdateToOneWithWhereWithoutAttendanceInputSchema), z.lazy(() => DutyUpdateWithoutAttendanceInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutAttendanceInputSchema) ]).optional(),
});

export default DutyUpdateOneRequiredWithoutAttendanceNestedInputSchema;
