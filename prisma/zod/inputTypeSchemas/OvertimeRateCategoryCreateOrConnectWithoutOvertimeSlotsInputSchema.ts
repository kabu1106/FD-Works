import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryWhereUniqueInputSchema } from './OvertimeRateCategoryWhereUniqueInputSchema';
import { OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema';

export const OvertimeRateCategoryCreateOrConnectWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.OvertimeRateCategoryCreateOrConnectWithoutOvertimeSlotsInput> = z.strictObject({
  where: z.lazy(() => OvertimeRateCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema) ]),
});

export default OvertimeRateCategoryCreateOrConnectWithoutOvertimeSlotsInputSchema;
