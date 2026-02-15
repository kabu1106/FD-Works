import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventScalarWhereInputSchema } from './AttendanceEventScalarWhereInputSchema';
import { AttendanceEventUpdateManyMutationInputSchema } from './AttendanceEventUpdateManyMutationInputSchema';
import { AttendanceEventUncheckedUpdateManyWithoutDutyInputSchema } from './AttendanceEventUncheckedUpdateManyWithoutDutyInputSchema';

export const AttendanceEventUpdateManyWithWhereWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceEventUpdateManyWithWhereWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => AttendanceEventScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AttendanceEventUpdateManyMutationInputSchema), z.lazy(() => AttendanceEventUncheckedUpdateManyWithoutDutyInputSchema) ]),
});

export default AttendanceEventUpdateManyWithWhereWithoutDutyInputSchema;
