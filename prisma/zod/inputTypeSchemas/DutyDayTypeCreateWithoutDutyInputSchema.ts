import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DayTypeSchema } from './DayTypeSchema';
import { StaffCreateNestedOneWithoutDutyDayTypesInputSchema } from './StaffCreateNestedOneWithoutDutyDayTypesInputSchema';

export const DutyDayTypeCreateWithoutDutyInputSchema: z.ZodType<Prisma.DutyDayTypeCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  dayType: z.lazy(() => DayTypeSchema),
  reason: z.string().optional(),
  decidedAt: z.coerce.date().optional(),
  decidedBy: z.string().optional().nullable(),
  staff: z.lazy(() => StaffCreateNestedOneWithoutDutyDayTypesInputSchema),
});

export default DutyDayTypeCreateWithoutDutyInputSchema;
