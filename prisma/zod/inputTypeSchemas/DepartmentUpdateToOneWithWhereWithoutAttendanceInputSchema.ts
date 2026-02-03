import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { DepartmentUpdateWithoutAttendanceInputSchema } from './DepartmentUpdateWithoutAttendanceInputSchema';
import { DepartmentUncheckedUpdateWithoutAttendanceInputSchema } from './DepartmentUncheckedUpdateWithoutAttendanceInputSchema';

export const DepartmentUpdateToOneWithWhereWithoutAttendanceInputSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutAttendanceInput> = z.strictObject({
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DepartmentUpdateWithoutAttendanceInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutAttendanceInputSchema) ]),
});

export default DepartmentUpdateToOneWithWhereWithoutAttendanceInputSchema;
