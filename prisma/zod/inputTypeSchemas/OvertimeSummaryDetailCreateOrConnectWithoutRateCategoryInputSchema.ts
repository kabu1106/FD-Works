import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailWhereUniqueInputSchema } from './OvertimeSummaryDetailWhereUniqueInputSchema';
import { OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema';

export const OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema) ]),
});

export default OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInputSchema;
