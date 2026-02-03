import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';

export const OvertimeRateCategoryUpsertWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUpsertWithoutOvertimeSlotsInput> = z.strictObject({
  update: z.union([ z.lazy(() => OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema) ]),
  create: z.union([ z.lazy(() => OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema) ]),
  where: z.lazy(() => OvertimeRateCategoryWhereInputSchema).optional(),
});

export default OvertimeRateCategoryUpsertWithoutOvertimeSlotsInputSchema;
