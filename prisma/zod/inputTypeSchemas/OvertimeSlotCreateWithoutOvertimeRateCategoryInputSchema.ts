import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupCreateNestedOneWithoutOvertimeSlotsInputSchema } from './WorkGroupCreateNestedOneWithoutOvertimeSlotsInputSchema';

export const OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotCreateWithoutOvertimeRateCategoryInput> = z.strictObject({
  startMinute: z.number().int(),
  endMinute: z.number().int(),
  workGroup: z.lazy(() => WorkGroupCreateNestedOneWithoutOvertimeSlotsInputSchema),
});

export default OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema;
