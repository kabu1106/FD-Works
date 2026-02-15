import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailUncheckedCreateNestedManyWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUncheckedCreateNestedManyWithoutOvertimeSummaryInputSchema';

export const OvertimeSummaryUncheckedCreateInputSchema: z.ZodType<Prisma.OvertimeSummaryUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  staffId: z.number().int(),
  calculationVersion: z.number().int(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  calculatedAt: z.coerce.date().optional(),
  details: z.lazy(() => OvertimeSummaryDetailUncheckedCreateNestedManyWithoutOvertimeSummaryInputSchema).optional(),
});

export default OvertimeSummaryUncheckedCreateInputSchema;
