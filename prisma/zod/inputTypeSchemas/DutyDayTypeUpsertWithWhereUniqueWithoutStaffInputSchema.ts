import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeWhereUniqueInputSchema } from './DutyDayTypeWhereUniqueInputSchema';
import { DutyDayTypeUpdateWithoutStaffInputSchema } from './DutyDayTypeUpdateWithoutStaffInputSchema';
import { DutyDayTypeUncheckedUpdateWithoutStaffInputSchema } from './DutyDayTypeUncheckedUpdateWithoutStaffInputSchema';
import { DutyDayTypeCreateWithoutStaffInputSchema } from './DutyDayTypeCreateWithoutStaffInputSchema';
import { DutyDayTypeUncheckedCreateWithoutStaffInputSchema } from './DutyDayTypeUncheckedCreateWithoutStaffInputSchema';

export const DutyDayTypeUpsertWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.DutyDayTypeUpsertWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => DutyDayTypeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DutyDayTypeUpdateWithoutStaffInputSchema), z.lazy(() => DutyDayTypeUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => DutyDayTypeCreateWithoutStaffInputSchema), z.lazy(() => DutyDayTypeUncheckedCreateWithoutStaffInputSchema) ]),
});

export default DutyDayTypeUpsertWithWhereUniqueWithoutStaffInputSchema;
