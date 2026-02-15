import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeWhereUniqueInputSchema } from './DutyDayTypeWhereUniqueInputSchema';
import { DutyDayTypeUpdateWithoutStaffInputSchema } from './DutyDayTypeUpdateWithoutStaffInputSchema';
import { DutyDayTypeUncheckedUpdateWithoutStaffInputSchema } from './DutyDayTypeUncheckedUpdateWithoutStaffInputSchema';

export const DutyDayTypeUpdateWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.DutyDayTypeUpdateWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => DutyDayTypeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DutyDayTypeUpdateWithoutStaffInputSchema), z.lazy(() => DutyDayTypeUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default DutyDayTypeUpdateWithWhereUniqueWithoutStaffInputSchema;
