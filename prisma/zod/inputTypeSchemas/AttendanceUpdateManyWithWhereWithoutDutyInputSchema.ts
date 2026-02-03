import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceScalarWhereInputSchema } from './AttendanceScalarWhereInputSchema';
import { AttendanceUpdateManyMutationInputSchema } from './AttendanceUpdateManyMutationInputSchema';
import { AttendanceUncheckedUpdateManyWithoutDutyInputSchema } from './AttendanceUncheckedUpdateManyWithoutDutyInputSchema';

export const AttendanceUpdateManyWithWhereWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithWhereWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => AttendanceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateManyMutationInputSchema), z.lazy(() => AttendanceUncheckedUpdateManyWithoutDutyInputSchema) ]),
});

export default AttendanceUpdateManyWithWhereWithoutDutyInputSchema;
