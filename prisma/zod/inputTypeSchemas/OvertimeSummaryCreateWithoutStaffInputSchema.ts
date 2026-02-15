import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateNestedOneWithoutOvertimeSummaryInputSchema } from './DutyCreateNestedOneWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema';

export const OvertimeSummaryCreateWithoutStaffInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  calculationVersion: z.number().int(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  calculatedAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutOvertimeSummaryInputSchema),
  details: z.lazy(() => OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema).optional(),
});

export default OvertimeSummaryCreateWithoutStaffInputSchema;
