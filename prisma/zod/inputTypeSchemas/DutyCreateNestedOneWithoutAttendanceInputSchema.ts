import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutAttendanceInputSchema } from './DutyCreateWithoutAttendanceInputSchema';
import { DutyUncheckedCreateWithoutAttendanceInputSchema } from './DutyUncheckedCreateWithoutAttendanceInputSchema';
import { DutyCreateOrConnectWithoutAttendanceInputSchema } from './DutyCreateOrConnectWithoutAttendanceInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';

export const DutyCreateNestedOneWithoutAttendanceInputSchema: z.ZodType<Prisma.DutyCreateNestedOneWithoutAttendanceInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutAttendanceInputSchema), z.lazy(() => DutyUncheckedCreateWithoutAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutAttendanceInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
});

export default DutyCreateNestedOneWithoutAttendanceInputSchema;
