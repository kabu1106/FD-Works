import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { TeamCreateNestedManyWithoutWorkShiftInputSchema } from './TeamCreateNestedManyWithoutWorkShiftInputSchema';

export const WorkShiftCreateWithoutWorkShiftDaysInputSchema: z.ZodType<Prisma.WorkShiftCreateWithoutWorkShiftDaysInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutWorkShiftInputSchema).optional(),
});

export default WorkShiftCreateWithoutWorkShiftDaysInputSchema;
