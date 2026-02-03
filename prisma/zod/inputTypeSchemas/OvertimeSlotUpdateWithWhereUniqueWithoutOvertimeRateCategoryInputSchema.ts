import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotWhereUniqueInputSchema } from './OvertimeSlotWhereUniqueInputSchema';
import { OvertimeSlotUpdateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUpdateWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotUncheckedUpdateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUncheckedUpdateWithoutOvertimeRateCategoryInputSchema';

export const OvertimeSlotUpdateWithWhereUniqueWithoutOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotUpdateWithWhereUniqueWithoutOvertimeRateCategoryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSlotWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OvertimeSlotUpdateWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotUncheckedUpdateWithoutOvertimeRateCategoryInputSchema) ]),
});

export default OvertimeSlotUpdateWithWhereUniqueWithoutOvertimeRateCategoryInputSchema;
