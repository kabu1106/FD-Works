import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceScalarWhereInputSchema } from './AttendanceScalarWhereInputSchema';
import { AttendanceUpdateManyMutationInputSchema } from './AttendanceUpdateManyMutationInputSchema';
import { AttendanceUncheckedUpdateManyWithoutDepartmentInputSchema } from './AttendanceUncheckedUpdateManyWithoutDepartmentInputSchema';

export const AttendanceUpdateManyWithWhereWithoutDepartmentInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithWhereWithoutDepartmentInput> = z.strictObject({
  where: z.lazy(() => AttendanceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateManyMutationInputSchema), z.lazy(() => AttendanceUncheckedUpdateManyWithoutDepartmentInputSchema) ]),
});

export default AttendanceUpdateManyWithWhereWithoutDepartmentInputSchema;
