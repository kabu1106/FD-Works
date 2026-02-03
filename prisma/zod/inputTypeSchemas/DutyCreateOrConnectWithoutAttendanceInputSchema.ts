import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyCreateWithoutAttendanceInputSchema } from './DutyCreateWithoutAttendanceInputSchema';
import { DutyUncheckedCreateWithoutAttendanceInputSchema } from './DutyUncheckedCreateWithoutAttendanceInputSchema';

export const DutyCreateOrConnectWithoutAttendanceInputSchema: z.ZodType<Prisma.DutyCreateOrConnectWithoutAttendanceInput> = z.strictObject({
  where: z.lazy(() => DutyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DutyCreateWithoutAttendanceInputSchema), z.lazy(() => DutyUncheckedCreateWithoutAttendanceInputSchema) ]),
});

export default DutyCreateOrConnectWithoutAttendanceInputSchema;
