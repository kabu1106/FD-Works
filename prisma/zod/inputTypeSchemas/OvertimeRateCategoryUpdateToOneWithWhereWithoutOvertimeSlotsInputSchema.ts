import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';
import { OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema';

export const OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSlotsInput> = z.strictObject({
  where: z.lazy(() => OvertimeRateCategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema) ]),
});

export default OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSlotsInputSchema;
