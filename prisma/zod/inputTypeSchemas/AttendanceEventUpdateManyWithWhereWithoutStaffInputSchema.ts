import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventScalarWhereInputSchema } from './AttendanceEventScalarWhereInputSchema';
import { AttendanceEventUpdateManyMutationInputSchema } from './AttendanceEventUpdateManyMutationInputSchema';
import { AttendanceEventUncheckedUpdateManyWithoutStaffInputSchema } from './AttendanceEventUncheckedUpdateManyWithoutStaffInputSchema';

export const AttendanceEventUpdateManyWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceEventUpdateManyWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => AttendanceEventScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AttendanceEventUpdateManyMutationInputSchema), z.lazy(() => AttendanceEventUncheckedUpdateManyWithoutStaffInputSchema) ]),
});

export default AttendanceEventUpdateManyWithWhereWithoutStaffInputSchema;
