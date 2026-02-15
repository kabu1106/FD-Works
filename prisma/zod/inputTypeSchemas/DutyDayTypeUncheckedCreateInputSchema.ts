import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DayTypeSchema } from './DayTypeSchema';

export const DutyDayTypeUncheckedCreateInputSchema: z.ZodType<Prisma.DutyDayTypeUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  staffId: z.number().int(),
  dayType: z.lazy(() => DayTypeSchema),
  reason: z.string().optional(),
  decidedAt: z.coerce.date().optional(),
  decidedBy: z.string().optional().nullable(),
});

export default DutyDayTypeUncheckedCreateInputSchema;
