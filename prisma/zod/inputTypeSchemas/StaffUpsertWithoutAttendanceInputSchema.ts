import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutAttendanceInputSchema } from './StaffUpdateWithoutAttendanceInputSchema';
import { StaffUncheckedUpdateWithoutAttendanceInputSchema } from './StaffUncheckedUpdateWithoutAttendanceInputSchema';
import { StaffCreateWithoutAttendanceInputSchema } from './StaffCreateWithoutAttendanceInputSchema';
import { StaffUncheckedCreateWithoutAttendanceInputSchema } from './StaffUncheckedCreateWithoutAttendanceInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutAttendanceInputSchema: z.ZodType<Prisma.StaffUpsertWithoutAttendanceInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutAttendanceInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutAttendanceInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutAttendanceInputSchema), z.lazy(() => StaffUncheckedCreateWithoutAttendanceInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutAttendanceInputSchema;
