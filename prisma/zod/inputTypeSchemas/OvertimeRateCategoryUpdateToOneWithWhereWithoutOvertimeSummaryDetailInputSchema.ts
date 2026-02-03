import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';
import { OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSummaryDetailInputSchema';

export const OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSummaryDetailInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSummaryDetailInput> = z.strictObject({
  where: z.lazy(() => OvertimeRateCategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSummaryDetailInputSchema) ]),
});

export default OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSummaryDetailInputSchema;
