import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSlotCreateManyInputSchema: z.ZodType<Prisma.OvertimeSlotCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  workGroupId: z.number().int(),
  startMinute: z.number().int(),
  endMinute: z.number().int(),
  overtimeRateCategoryId: z.number().int().optional().nullable(),
});

export default OvertimeSlotCreateManyInputSchema;
