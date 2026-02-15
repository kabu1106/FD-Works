import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateNestedOneWithoutOvertimeSummaryInputSchema } from './DutyCreateNestedOneWithoutOvertimeSummaryInputSchema';
import { StaffCreateNestedOneWithoutOvertimeSummaryInputSchema } from './StaffCreateNestedOneWithoutOvertimeSummaryInputSchema';

export const OvertimeSummaryCreateWithoutDetailsInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateWithoutDetailsInput> = z.strictObject({
  id: z.string().optional(),
  calculationVersion: z.number().int(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  calculatedAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutOvertimeSummaryInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutOvertimeSummaryInputSchema),
});

export default OvertimeSummaryCreateWithoutDetailsInputSchema;
