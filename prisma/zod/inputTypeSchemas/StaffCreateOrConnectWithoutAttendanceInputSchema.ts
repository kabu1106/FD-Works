import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutAttendanceInputSchema } from './StaffCreateWithoutAttendanceInputSchema';
import { StaffUncheckedCreateWithoutAttendanceInputSchema } from './StaffUncheckedCreateWithoutAttendanceInputSchema';

export const StaffCreateOrConnectWithoutAttendanceInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutAttendanceInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutAttendanceInputSchema), z.lazy(() => StaffUncheckedCreateWithoutAttendanceInputSchema) ]),
});

export default StaffCreateOrConnectWithoutAttendanceInputSchema;
