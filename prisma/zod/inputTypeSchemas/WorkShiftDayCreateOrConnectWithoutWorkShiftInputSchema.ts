import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftDayWhereUniqueInputSchema } from './WorkShiftDayWhereUniqueInputSchema';
import { WorkShiftDayCreateWithoutWorkShiftInputSchema } from './WorkShiftDayCreateWithoutWorkShiftInputSchema';
import { WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema } from './WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema';

export const WorkShiftDayCreateOrConnectWithoutWorkShiftInputSchema: z.ZodType<Prisma.WorkShiftDayCreateOrConnectWithoutWorkShiftInput> = z.strictObject({
  where: z.lazy(() => WorkShiftDayWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkShiftDayCreateWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema) ]),
});

export default WorkShiftDayCreateOrConnectWithoutWorkShiftInputSchema;
