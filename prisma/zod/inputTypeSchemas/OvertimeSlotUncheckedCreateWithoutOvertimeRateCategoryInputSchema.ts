import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInput> = z.strictObject({
  id: z.number().int().optional(),
  workGroupId: z.number().int(),
  startMinute: z.number().int(),
  endMinute: z.number().int(),
});

export default OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema;
