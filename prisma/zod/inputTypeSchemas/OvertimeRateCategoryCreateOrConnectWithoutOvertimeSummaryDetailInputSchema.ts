import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryWhereUniqueInputSchema } from './OvertimeRateCategoryWhereUniqueInputSchema';
import { OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema';

export const OvertimeRateCategoryCreateOrConnectWithoutOvertimeSummaryDetailInputSchema: z.ZodType<Prisma.OvertimeRateCategoryCreateOrConnectWithoutOvertimeSummaryDetailInput> = z.strictObject({
  where: z.lazy(() => OvertimeRateCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema) ]),
});

export default OvertimeRateCategoryCreateOrConnectWithoutOvertimeSummaryDetailInputSchema;
