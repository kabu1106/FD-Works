import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSlotCreateManyWorkGroupInputSchema: z.ZodType<Prisma.OvertimeSlotCreateManyWorkGroupInput> = z.strictObject({
  id: z.number().int().optional(),
  startMinute: z.number().int(),
  endMinute: z.number().int(),
  overtimeRateCategoryId: z.number().int().optional().nullable(),
});

export default OvertimeSlotCreateManyWorkGroupInputSchema;
