import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftDayWhereUniqueInputSchema } from './WorkShiftDayWhereUniqueInputSchema';
import { WorkShiftDayUpdateWithoutWorkShiftInputSchema } from './WorkShiftDayUpdateWithoutWorkShiftInputSchema';
import { WorkShiftDayUncheckedUpdateWithoutWorkShiftInputSchema } from './WorkShiftDayUncheckedUpdateWithoutWorkShiftInputSchema';

export const WorkShiftDayUpdateWithWhereUniqueWithoutWorkShiftInputSchema: z.ZodType<Prisma.WorkShiftDayUpdateWithWhereUniqueWithoutWorkShiftInput> = z.strictObject({
  where: z.lazy(() => WorkShiftDayWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkShiftDayUpdateWithoutWorkShiftInputSchema), z.lazy(() => WorkShiftDayUncheckedUpdateWithoutWorkShiftInputSchema) ]),
});

export default WorkShiftDayUpdateWithWhereUniqueWithoutWorkShiftInputSchema;
