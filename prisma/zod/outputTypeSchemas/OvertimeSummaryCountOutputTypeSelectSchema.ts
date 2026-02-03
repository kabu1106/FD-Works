import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OvertimeSummaryCountOutputTypeSelectSchema: z.ZodType<Prisma.OvertimeSummaryCountOutputTypeSelect> = z.object({
  details: z.boolean().optional(),
}).strict();

export default OvertimeSummaryCountOutputTypeSelectSchema;
