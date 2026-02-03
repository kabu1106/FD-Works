import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSlotCreateManyOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotCreateManyOvertimeRateCategoryInput> = z.strictObject({
  id: z.number().int().optional(),
  workGroupId: z.number().int(),
  startMinute: z.number().int(),
  endMinute: z.number().int(),
});

export default OvertimeSlotCreateManyOvertimeRateCategoryInputSchema;
