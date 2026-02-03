import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkShiftDayDateWorkShiftIdCompoundUniqueInputSchema: z.ZodType<Prisma.WorkShiftDayDateWorkShiftIdCompoundUniqueInput> = z.strictObject({
  date: z.coerce.date(),
  workShiftId: z.number(),
});

export default WorkShiftDayDateWorkShiftIdCompoundUniqueInputSchema;
