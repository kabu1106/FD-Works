import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { DutyUpdateWithoutAttendanceInputSchema } from './DutyUpdateWithoutAttendanceInputSchema';
import { DutyUncheckedUpdateWithoutAttendanceInputSchema } from './DutyUncheckedUpdateWithoutAttendanceInputSchema';

export const DutyUpdateToOneWithWhereWithoutAttendanceInputSchema: z.ZodType<Prisma.DutyUpdateToOneWithWhereWithoutAttendanceInput> = z.strictObject({
  where: z.lazy(() => DutyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DutyUpdateWithoutAttendanceInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutAttendanceInputSchema) ]),
});

export default DutyUpdateToOneWithWhereWithoutAttendanceInputSchema;
