import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeWhereUniqueInputSchema } from './DutyDayTypeWhereUniqueInputSchema';
import { DutyDayTypeUpdateWithoutDutyInputSchema } from './DutyDayTypeUpdateWithoutDutyInputSchema';
import { DutyDayTypeUncheckedUpdateWithoutDutyInputSchema } from './DutyDayTypeUncheckedUpdateWithoutDutyInputSchema';
import { DutyDayTypeCreateWithoutDutyInputSchema } from './DutyDayTypeCreateWithoutDutyInputSchema';
import { DutyDayTypeUncheckedCreateWithoutDutyInputSchema } from './DutyDayTypeUncheckedCreateWithoutDutyInputSchema';

export const DutyDayTypeUpsertWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.DutyDayTypeUpsertWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => DutyDayTypeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DutyDayTypeUpdateWithoutDutyInputSchema), z.lazy(() => DutyDayTypeUncheckedUpdateWithoutDutyInputSchema) ]),
  create: z.union([ z.lazy(() => DutyDayTypeCreateWithoutDutyInputSchema), z.lazy(() => DutyDayTypeUncheckedCreateWithoutDutyInputSchema) ]),
});

export default DutyDayTypeUpsertWithWhereUniqueWithoutDutyInputSchema;
