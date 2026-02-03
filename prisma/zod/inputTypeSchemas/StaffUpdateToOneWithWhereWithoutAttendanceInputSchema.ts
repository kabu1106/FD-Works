import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutAttendanceInputSchema } from './StaffUpdateWithoutAttendanceInputSchema';
import { StaffUncheckedUpdateWithoutAttendanceInputSchema } from './StaffUncheckedUpdateWithoutAttendanceInputSchema';

export const StaffUpdateToOneWithWhereWithoutAttendanceInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutAttendanceInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutAttendanceInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutAttendanceInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutAttendanceInputSchema;
