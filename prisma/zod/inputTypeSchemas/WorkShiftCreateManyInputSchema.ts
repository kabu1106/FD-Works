import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';

export const WorkShiftCreateManyInputSchema: z.ZodType<Prisma.WorkShiftCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  shiftType: z.lazy(() => ShiftTypeSchema).optional(),
  isActive: z.boolean().optional(),
});

export default WorkShiftCreateManyInputSchema;
