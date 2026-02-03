import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';
import { OvertimeSummaryCreateWithoutDutyInputSchema } from './OvertimeSummaryCreateWithoutDutyInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutDutyInputSchema } from './OvertimeSummaryUncheckedCreateWithoutDutyInputSchema';

export const OvertimeSummaryCreateOrConnectWithoutDutyInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateOrConnectWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutDutyInputSchema) ]),
});

export default OvertimeSummaryCreateOrConnectWithoutDutyInputSchema;
