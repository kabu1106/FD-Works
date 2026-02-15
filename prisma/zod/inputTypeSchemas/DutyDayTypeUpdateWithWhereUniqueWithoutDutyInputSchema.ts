import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeWhereUniqueInputSchema } from './DutyDayTypeWhereUniqueInputSchema';
import { DutyDayTypeUpdateWithoutDutyInputSchema } from './DutyDayTypeUpdateWithoutDutyInputSchema';
import { DutyDayTypeUncheckedUpdateWithoutDutyInputSchema } from './DutyDayTypeUncheckedUpdateWithoutDutyInputSchema';

export const DutyDayTypeUpdateWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.DutyDayTypeUpdateWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => DutyDayTypeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DutyDayTypeUpdateWithoutDutyInputSchema), z.lazy(() => DutyDayTypeUncheckedUpdateWithoutDutyInputSchema) ]),
});

export default DutyDayTypeUpdateWithWhereUniqueWithoutDutyInputSchema;
