import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';

export const TeamCreateManyWorkShiftInputSchema: z.ZodType<Prisma.TeamCreateManyWorkShiftInput> = z.strictObject({
  id: z.number().int().optional(),
  departmentId: z.number().int(),
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
});

export default TeamCreateManyWorkShiftInputSchema;
