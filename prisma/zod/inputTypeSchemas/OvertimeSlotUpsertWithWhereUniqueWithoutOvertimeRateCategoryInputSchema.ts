import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotWhereUniqueInputSchema } from './OvertimeSlotWhereUniqueInputSchema';
import { OvertimeSlotUpdateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUpdateWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotUncheckedUpdateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUncheckedUpdateWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema';

export const OvertimeSlotUpsertWithWhereUniqueWithoutOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotUpsertWithWhereUniqueWithoutOvertimeRateCategoryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSlotWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OvertimeSlotUpdateWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotUncheckedUpdateWithoutOvertimeRateCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema) ]),
});

export default OvertimeSlotUpsertWithWhereUniqueWithoutOvertimeRateCategoryInputSchema;
