import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentUpdateWithoutAttendanceInputSchema } from './DepartmentUpdateWithoutAttendanceInputSchema';
import { DepartmentUncheckedUpdateWithoutAttendanceInputSchema } from './DepartmentUncheckedUpdateWithoutAttendanceInputSchema';
import { DepartmentCreateWithoutAttendanceInputSchema } from './DepartmentCreateWithoutAttendanceInputSchema';
import { DepartmentUncheckedCreateWithoutAttendanceInputSchema } from './DepartmentUncheckedCreateWithoutAttendanceInputSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';

export const DepartmentUpsertWithoutAttendanceInputSchema: z.ZodType<Prisma.DepartmentUpsertWithoutAttendanceInput> = z.strictObject({
  update: z.union([ z.lazy(() => DepartmentUpdateWithoutAttendanceInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutAttendanceInputSchema) ]),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutAttendanceInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutAttendanceInputSchema) ]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
});

export default DepartmentUpsertWithoutAttendanceInputSchema;
