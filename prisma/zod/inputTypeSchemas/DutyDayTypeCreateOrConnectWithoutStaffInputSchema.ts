import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeWhereUniqueInputSchema } from './DutyDayTypeWhereUniqueInputSchema';
import { DutyDayTypeCreateWithoutStaffInputSchema } from './DutyDayTypeCreateWithoutStaffInputSchema';
import { DutyDayTypeUncheckedCreateWithoutStaffInputSchema } from './DutyDayTypeUncheckedCreateWithoutStaffInputSchema';

export const DutyDayTypeCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.DutyDayTypeCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => DutyDayTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DutyDayTypeCreateWithoutStaffInputSchema), z.lazy(() => DutyDayTypeUncheckedCreateWithoutStaffInputSchema) ]),
});

export default DutyDayTypeCreateOrConnectWithoutStaffInputSchema;
