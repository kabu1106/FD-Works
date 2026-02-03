import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateNestedOneWithoutOvertimeSummaryInputSchema } from './DutyCreateNestedOneWithoutOvertimeSummaryInputSchema';
import { StaffCreateNestedOneWithoutOvertimeSummaryInputSchema } from './StaffCreateNestedOneWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema';

export const OvertimeSummaryCreateInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateInput> = z.strictObject({
  id: z.string().optional(),
  version: z.number().int().optional(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutOvertimeSummaryInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutOvertimeSummaryInputSchema),
  details: z.lazy(() => OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema).optional(),
});

export default OvertimeSummaryCreateInputSchema;
