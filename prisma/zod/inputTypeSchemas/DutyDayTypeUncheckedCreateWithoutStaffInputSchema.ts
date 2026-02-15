import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DayTypeSchema } from './DayTypeSchema';

export const DutyDayTypeUncheckedCreateWithoutStaffInputSchema: z.ZodType<Prisma.DutyDayTypeUncheckedCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  dayType: z.lazy(() => DayTypeSchema),
  reason: z.string().optional(),
  decidedAt: z.coerce.date().optional(),
  decidedBy: z.string().optional().nullable(),
});

export default DutyDayTypeUncheckedCreateWithoutStaffInputSchema;
