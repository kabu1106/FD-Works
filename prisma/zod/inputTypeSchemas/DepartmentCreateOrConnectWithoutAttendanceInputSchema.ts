import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';
import { DepartmentCreateWithoutAttendanceInputSchema } from './DepartmentCreateWithoutAttendanceInputSchema';
import { DepartmentUncheckedCreateWithoutAttendanceInputSchema } from './DepartmentUncheckedCreateWithoutAttendanceInputSchema';

export const DepartmentCreateOrConnectWithoutAttendanceInputSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutAttendanceInput> = z.strictObject({
  where: z.lazy(() => DepartmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutAttendanceInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutAttendanceInputSchema) ]),
});

export default DepartmentCreateOrConnectWithoutAttendanceInputSchema;
