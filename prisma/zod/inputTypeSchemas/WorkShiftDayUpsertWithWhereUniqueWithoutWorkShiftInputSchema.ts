import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftDayWhereUniqueInputSchema } from './WorkShiftDayWhereUniqueInputSchema';
import { WorkShiftDayUpdateWithoutWorkShiftInputSchema } from './WorkShiftDayUpdateWithoutWorkShiftInputSchema';
import { WorkShiftDayUncheckedUpdateWithoutWorkShiftInputSchema } from './WorkShiftDayUncheckedUpdateWithoutWorkShiftInputSchema';
import { WorkShiftDayCreateWithoutWorkShiftInputSchema } from './WorkShiftDayCreateWithoutWorkShiftInputSchema';
import { WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema } from './WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema';

export const WorkShiftDayUpsertWithWhereUniqueWithoutWorkShiftInputSchema: z.ZodType<Prisma.WorkShiftDayUpsertWithWhereUniqueWithoutWorkShiftInput> = z.strictObject({
  where: z.lazy(() => WorkShiftDayWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkShiftDayUpdateWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayUncheckedUpdateWithoutWorkShiftInputSchema) ]),
  create: z.union([ z.lazy(() => WorkShiftDayCreateWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayUncheckedCreateWithoutWorkShiftInputSchema) ]),
});

export default WorkShiftDayUpsertWithWhereUniqueWithoutWorkShiftInputSchema;
