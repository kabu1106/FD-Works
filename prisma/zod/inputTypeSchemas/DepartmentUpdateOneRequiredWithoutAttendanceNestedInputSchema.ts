import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateWithoutAttendanceInputSchema } from './DepartmentCreateWithoutAttendanceInputSchema';
import { DepartmentUncheckedCreateWithoutAttendanceInputSchema } from './DepartmentUncheckedCreateWithoutAttendanceInputSchema';
import { DepartmentCreateOrConnectWithoutAttendanceInputSchema } from './DepartmentCreateOrConnectWithoutAttendanceInputSchema';
import { DepartmentUpsertWithoutAttendanceInputSchema } from './DepartmentUpsertWithoutAttendanceInputSchema';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';
import { DepartmentUpdateToOneWithWhereWithoutAttendanceInputSchema } from './DepartmentUpdateToOneWithWhereWithoutAttendanceInputSchema';
import { DepartmentUpdateWithoutAttendanceInputSchema } from './DepartmentUpdateWithoutAttendanceInputSchema';
import { DepartmentUncheckedUpdateWithoutAttendanceInputSchema } from './DepartmentUncheckedUpdateWithoutAttendanceInputSchema';

export const DepartmentUpdateOneRequiredWithoutAttendanceNestedInputSchema: z.ZodType<Prisma.DepartmentUpdateOneRequiredWithoutAttendanceNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutAttendanceInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutAttendanceInputSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutAttendanceInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DepartmentUpdateToOneWithWhereWithoutAttendanceInputSchema), z.lazy(() => DepartmentUpdateWithoutAttendanceInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutAttendanceInputSchema) ]).optional(),
});

export default DepartmentUpdateOneRequiredWithoutAttendanceNestedInputSchema;
