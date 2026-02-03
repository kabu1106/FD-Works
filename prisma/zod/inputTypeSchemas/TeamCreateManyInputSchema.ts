import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';

export const TeamCreateManyInputSchema: z.ZodType<Prisma.TeamCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  departmentId: z.number().int(),
  workShiftId: z.number().int(),
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
});

export default TeamCreateManyInputSchema;
