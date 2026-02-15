import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeWhereUniqueInputSchema } from './DutyDayTypeWhereUniqueInputSchema';
import { DutyDayTypeCreateWithoutDutyInputSchema } from './DutyDayTypeCreateWithoutDutyInputSchema';
import { DutyDayTypeUncheckedCreateWithoutDutyInputSchema } from './DutyDayTypeUncheckedCreateWithoutDutyInputSchema';

export const DutyDayTypeCreateOrConnectWithoutDutyInputSchema: z.ZodType<Prisma.DutyDayTypeCreateOrConnectWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => DutyDayTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DutyDayTypeCreateWithoutDutyInputSchema), z.lazy(() => DutyDayTypeUncheckedCreateWithoutDutyInputSchema) ]),
});

export default DutyDayTypeCreateOrConnectWithoutDutyInputSchema;
