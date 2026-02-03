import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { WorkShiftDayCreateNestedManyWithoutWorkShiftInputSchema } from './WorkShiftDayCreateNestedManyWithoutWorkShiftInputSchema';

export const WorkShiftCreateWithoutTeamsInputSchema: z.ZodType<Prisma.WorkShiftCreateWithoutTeamsInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  workShiftDays: z.lazy(() => WorkShiftDayCreateNestedManyWithoutWorkShiftInputSchema).optional(),
});

export default WorkShiftCreateWithoutTeamsInputSchema;
