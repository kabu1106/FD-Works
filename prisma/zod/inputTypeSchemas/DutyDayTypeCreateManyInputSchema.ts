import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DayTypeSchema } from './DayTypeSchema';

export const DutyDayTypeCreateManyInputSchema: z.ZodType<Prisma.DutyDayTypeCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  staffId: z.number().int(),
  dayType: z.lazy(() => DayTypeSchema),
  reason: z.string().optional(),
  decidedAt: z.coerce.date().optional(),
  decidedBy: z.string().optional().nullable(),
});

export default DutyDayTypeCreateManyInputSchema;
