import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceScalarWhereInputSchema } from './AttendanceScalarWhereInputSchema';
import { AttendanceUpdateManyMutationInputSchema } from './AttendanceUpdateManyMutationInputSchema';
import { AttendanceUncheckedUpdateManyWithoutStaffInputSchema } from './AttendanceUncheckedUpdateManyWithoutStaffInputSchema';

export const AttendanceUpdateManyWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => AttendanceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateManyMutationInputSchema), z.lazy(() => AttendanceUncheckedUpdateManyWithoutStaffInputSchema) ]),
});

export default AttendanceUpdateManyWithWhereWithoutStaffInputSchema;
