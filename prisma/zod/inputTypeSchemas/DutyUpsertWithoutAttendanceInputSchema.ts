import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyUpdateWithoutAttendanceInputSchema } from './DutyUpdateWithoutAttendanceInputSchema';
import { DutyUncheckedUpdateWithoutAttendanceInputSchema } from './DutyUncheckedUpdateWithoutAttendanceInputSchema';
import { DutyCreateWithoutAttendanceInputSchema } from './DutyCreateWithoutAttendanceInputSchema';
import { DutyUncheckedCreateWithoutAttendanceInputSchema } from './DutyUncheckedCreateWithoutAttendanceInputSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';

export const DutyUpsertWithoutAttendanceInputSchema: z.ZodType<Prisma.DutyUpsertWithoutAttendanceInput> = z.strictObject({
  update: z.union([ z.lazy(() => DutyUpdateWithoutAttendanceInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutAttendanceInputSchema) ]),
  create: z.union([ z.lazy(() => DutyCreateWithoutAttendanceInputSchema), z.lazy(() => DutyUncheckedCreateWithoutAttendanceInputSchema) ]),
  where: z.lazy(() => DutyWhereInputSchema).optional(),
});

export default DutyUpsertWithoutAttendanceInputSchema;
