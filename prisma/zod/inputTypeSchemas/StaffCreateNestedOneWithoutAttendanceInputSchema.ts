import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutAttendanceInputSchema } from './StaffCreateWithoutAttendanceInputSchema';
import { StaffUncheckedCreateWithoutAttendanceInputSchema } from './StaffUncheckedCreateWithoutAttendanceInputSchema';
import { StaffCreateOrConnectWithoutAttendanceInputSchema } from './StaffCreateOrConnectWithoutAttendanceInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutAttendanceInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutAttendanceInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutAttendanceInputSchema), z.lazy(() => StaffUncheckedCreateWithoutAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutAttendanceInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutAttendanceInputSchema;
