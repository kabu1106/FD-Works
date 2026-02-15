import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DayTypeSchema } from './DayTypeSchema';
import { DutyCreateNestedOneWithoutDutyDayTypesInputSchema } from './DutyCreateNestedOneWithoutDutyDayTypesInputSchema';

export const DutyDayTypeCreateWithoutStaffInputSchema: z.ZodType<Prisma.DutyDayTypeCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  dayType: z.lazy(() => DayTypeSchema),
  reason: z.string().optional(),
  decidedAt: z.coerce.date().optional(),
  decidedBy: z.string().optional().nullable(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutDutyDayTypesInputSchema),
});

export default DutyDayTypeCreateWithoutStaffInputSchema;
