import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateWithoutAttendanceInputSchema } from './DepartmentCreateWithoutAttendanceInputSchema';
import { DepartmentUncheckedCreateWithoutAttendanceInputSchema } from './DepartmentUncheckedCreateWithoutAttendanceInputSchema';
import { DepartmentCreateOrConnectWithoutAttendanceInputSchema } from './DepartmentCreateOrConnectWithoutAttendanceInputSchema';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';

export const DepartmentCreateNestedOneWithoutAttendanceInputSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutAttendanceInput> = z.strictObject({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutAttendanceInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutAttendanceInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
});

export default DepartmentCreateNestedOneWithoutAttendanceInputSchema;
