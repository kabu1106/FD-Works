import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';
import { OvertimeSummaryCreateWithoutDetailsInputSchema } from './OvertimeSummaryCreateWithoutDetailsInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema } from './OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema';

export const OvertimeSummaryCreateOrConnectWithoutDetailsInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateOrConnectWithoutDetailsInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutDetailsInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema) ]),
});

export default OvertimeSummaryCreateOrConnectWithoutDetailsInputSchema;
