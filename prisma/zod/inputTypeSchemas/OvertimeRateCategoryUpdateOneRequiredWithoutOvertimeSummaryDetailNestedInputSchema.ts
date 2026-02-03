import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryCreateOrConnectWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryCreateOrConnectWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryUpsertWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUpsertWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryWhereUniqueInputSchema } from './OvertimeRateCategoryWhereUniqueInputSchema';
import { OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema';
import { OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSummaryDetailInputSchema';

export const OvertimeRateCategoryUpdateOneRequiredWithoutOvertimeSummaryDetailNestedInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUpdateOneRequiredWithoutOvertimeSummaryDetailNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OvertimeRateCategoryCreateOrConnectWithoutOvertimeSummaryDetailInputSchema).optional(),
  upsert: z.lazy(() => OvertimeRateCategoryUpsertWithoutOvertimeSummaryDetailInputSchema).optional(),
  connect: z.lazy(() => OvertimeRateCategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSummaryDetailInputSchema), z.lazy(() => OvertimeRateCategoryUpdateWithoutOvertimeSummaryDetailInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSummaryDetailInputSchema) ]).optional(),
});

export default OvertimeRateCategoryUpdateOneRequiredWithoutOvertimeSummaryDetailNestedInputSchema;
