import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailWhereUniqueInputSchema } from './OvertimeSummaryDetailWhereUniqueInputSchema';
import { OvertimeSummaryDetailUpdateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUpdateWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailUncheckedUpdateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUncheckedUpdateWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema';

export const OvertimeSummaryDetailUpsertWithWhereUniqueWithoutRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpsertWithWhereUniqueWithoutRateCategoryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OvertimeSummaryDetailUpdateWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedUpdateWithoutRateCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema) ]),
});

export default OvertimeSummaryDetailUpsertWithWhereUniqueWithoutRateCategoryInputSchema;
