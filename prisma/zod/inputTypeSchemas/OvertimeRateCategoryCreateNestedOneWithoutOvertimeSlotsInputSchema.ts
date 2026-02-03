import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryCreateOrConnectWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryCreateOrConnectWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryWhereUniqueInputSchema } from './OvertimeRateCategoryWhereUniqueInputSchema';

export const OvertimeRateCategoryCreateNestedOneWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.OvertimeRateCategoryCreateNestedOneWithoutOvertimeSlotsInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OvertimeRateCategoryCreateOrConnectWithoutOvertimeSlotsInputSchema).optional(),
  connect: z.lazy(() => OvertimeRateCategoryWhereUniqueInputSchema).optional(),
});

export default OvertimeRateCategoryCreateNestedOneWithoutOvertimeSlotsInputSchema;
