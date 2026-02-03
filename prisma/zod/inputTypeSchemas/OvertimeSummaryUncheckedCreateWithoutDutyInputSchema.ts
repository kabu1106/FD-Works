import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailUncheckedCreateNestedManyWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUncheckedCreateNestedManyWithoutOvertimeSummaryInputSchema';

export const OvertimeSummaryUncheckedCreateWithoutDutyInputSchema: z.ZodType<Prisma.OvertimeSummaryUncheckedCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  staffId: z.number().int(),
  version: z.number().int().optional(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  details: z.lazy(() => OvertimeSummaryDetailUncheckedCreateNestedManyWithoutOvertimeSummaryInputSchema).optional(),
});

export default OvertimeSummaryUncheckedCreateWithoutDutyInputSchema;
