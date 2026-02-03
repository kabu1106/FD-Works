import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { TeamUncheckedCreateNestedManyWithoutWorkShiftInputSchema } from './TeamUncheckedCreateNestedManyWithoutWorkShiftInputSchema';
import { WorkShiftDayUncheckedCreateNestedManyWithoutWorkShiftInputSchema } from './WorkShiftDayUncheckedCreateNestedManyWithoutWorkShiftInputSchema';

export const WorkShiftUncheckedCreateInputSchema: z.ZodType<Prisma.WorkShiftUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutWorkShiftInputSchema).optional(),
  workShiftDays: z.lazy(() => WorkShiftDayUncheckedCreateNestedManyWithoutWorkShiftInputSchema).optional(),
});

export default WorkShiftUncheckedCreateInputSchema;
