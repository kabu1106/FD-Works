import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';

export const TeamCreateManyDepartmentsInputSchema: z.ZodType<Prisma.TeamCreateManyDepartmentsInput> = z.strictObject({
  id: z.number().int().optional(),
  workShiftId: z.number().int(),
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
});

export default TeamCreateManyDepartmentsInputSchema;
