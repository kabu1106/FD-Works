import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';

export const OvertimeRateCategoryUpsertWithoutOvertimeSummaryDetailInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUpsertWithoutOvertimeSummaryDetailInput> = z.strictObject({
  update: z.union([ z.lazy(() => OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSummaryDetailInputSchema) ]),
  create: z.union([ z.lazy(() => OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema) ]),
  where: z.lazy(() => OvertimeRateCategoryWhereInputSchema).optional(),
});

export default OvertimeRateCategoryUpsertWithoutOvertimeSummaryDetailInputSchema;
