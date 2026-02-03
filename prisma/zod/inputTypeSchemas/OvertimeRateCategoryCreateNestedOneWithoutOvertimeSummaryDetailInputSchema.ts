import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryCreateOrConnectWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryCreateOrConnectWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryWhereUniqueInputSchema } from './OvertimeRateCategoryWhereUniqueInputSchema';

export const OvertimeRateCategoryCreateNestedOneWithoutOvertimeSummaryDetailInputSchema: z.ZodType<Prisma.OvertimeRateCategoryCreateNestedOneWithoutOvertimeSummaryDetailInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OvertimeRateCategoryCreateOrConnectWithoutOvertimeSummaryDetailInputSchema).optional(),
  connect: z.lazy(() => OvertimeRateCategoryWhereUniqueInputSchema).optional(),
});

export default OvertimeRateCategoryCreateNestedOneWithoutOvertimeSummaryDetailInputSchema;
