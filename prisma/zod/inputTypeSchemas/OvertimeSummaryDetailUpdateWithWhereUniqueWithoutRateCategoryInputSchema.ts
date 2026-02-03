import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailWhereUniqueInputSchema } from './OvertimeSummaryDetailWhereUniqueInputSchema';
import { OvertimeSummaryDetailUpdateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUpdateWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailUncheckedUpdateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUncheckedUpdateWithoutRateCategoryInputSchema';

export const OvertimeSummaryDetailUpdateWithWhereUniqueWithoutRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpdateWithWhereUniqueWithoutRateCategoryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OvertimeSummaryDetailUpdateWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedUpdateWithoutRateCategoryInputSchema) ]),
});

export default OvertimeSummaryDetailUpdateWithWhereUniqueWithoutRateCategoryInputSchema;
