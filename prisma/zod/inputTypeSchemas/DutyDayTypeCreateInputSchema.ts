import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DayTypeSchema } from './DayTypeSchema';
import { DutyCreateNestedOneWithoutDutyDayTypesInputSchema } from './DutyCreateNestedOneWithoutDutyDayTypesInputSchema';
import { StaffCreateNestedOneWithoutDutyDayTypesInputSchema } from './StaffCreateNestedOneWithoutDutyDayTypesInputSchema';

export const DutyDayTypeCreateInputSchema: z.ZodType<Prisma.DutyDayTypeCreateInput> = z.strictObject({
  id: z.string().optional(),
  dayType: z.lazy(() => DayTypeSchema),
  reason: z.string().optional(),
  decidedAt: z.coerce.date().optional(),
  decidedBy: z.string().optional().nullable(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutDutyDayTypesInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutDutyDayTypesInputSchema),
});

export default DutyDayTypeCreateInputSchema;
