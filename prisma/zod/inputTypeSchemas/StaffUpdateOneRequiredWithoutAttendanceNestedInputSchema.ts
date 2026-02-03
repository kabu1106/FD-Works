import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutAttendanceInputSchema } from './StaffCreateWithoutAttendanceInputSchema';
import { StaffUncheckedCreateWithoutAttendanceInputSchema } from './StaffUncheckedCreateWithoutAttendanceInputSchema';
import { StaffCreateOrConnectWithoutAttendanceInputSchema } from './StaffCreateOrConnectWithoutAttendanceInputSchema';
import { StaffUpsertWithoutAttendanceInputSchema } from './StaffUpsertWithoutAttendanceInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutAttendanceInputSchema } from './StaffUpdateToOneWithWhereWithoutAttendanceInputSchema';
import { StaffUpdateWithoutAttendanceInputSchema } from './StaffUpdateWithoutAttendanceInputSchema';
import { StaffUncheckedUpdateWithoutAttendanceInputSchema } from './StaffUncheckedUpdateWithoutAttendanceInputSchema';

export const StaffUpdateOneRequiredWithoutAttendanceNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneRequiredWithoutAttendanceNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutAttendanceInputSchema), z.lazy(() => StaffUncheckedCreateWithoutAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutAttendanceInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutAttendanceInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutAttendanceInputSchema), z.lazy(() => StaffUpdateWithoutAttendanceInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutAttendanceInputSchema) ]).optional(),
});

export default StaffUpdateOneRequiredWithoutAttendanceNestedInputSchema;
