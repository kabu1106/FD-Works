import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateNestedOneWithoutOvertimeSummaryInputSchema } from './StaffCreateNestedOneWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema';

export const OvertimeSummaryCreateWithoutDutyInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  calculationVersion: z.number().int(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  calculatedAt: z.coerce.date().optional(),
  staff: z.lazy(() => StaffCreateNestedOneWithoutOvertimeSummaryInputSchema),
  details: z.lazy(() => OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema).optional(),
});

export default OvertimeSummaryCreateWithoutDutyInputSchema;
