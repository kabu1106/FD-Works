import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotWhereUniqueInputSchema } from './OvertimeSlotWhereUniqueInputSchema';
import { OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema';

export const OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSlotWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema) ]),
});

export default OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInputSchema;
