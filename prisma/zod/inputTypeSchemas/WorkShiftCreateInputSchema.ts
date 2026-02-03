import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { TeamCreateNestedManyWithoutWorkShiftInputSchema } from './TeamCreateNestedManyWithoutWorkShiftInputSchema';
import { WorkShiftDayCreateNestedManyWithoutWorkShiftInputSchema } from './WorkShiftDayCreateNestedManyWithoutWorkShiftInputSchema';

export const WorkShiftCreateInputSchema: z.ZodType<Prisma.WorkShiftCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutWorkShiftInputSchema).optional(),
  workShiftDays: z.lazy(() => WorkShiftDayCreateNestedManyWithoutWorkShiftInputSchema).optional(),
});

export default WorkShiftCreateInputSchema;
