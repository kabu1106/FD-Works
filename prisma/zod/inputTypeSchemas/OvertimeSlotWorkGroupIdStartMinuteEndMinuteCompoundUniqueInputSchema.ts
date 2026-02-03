import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSlotWorkGroupIdStartMinuteEndMinuteCompoundUniqueInputSchema: z.ZodType<Prisma.OvertimeSlotWorkGroupIdStartMinuteEndMinuteCompoundUniqueInput> = z.strictObject({
  workGroupId: z.number(),
  startMinute: z.number(),
  endMinute: z.number(),
});

export default OvertimeSlotWorkGroupIdStartMinuteEndMinuteCompoundUniqueInputSchema;
