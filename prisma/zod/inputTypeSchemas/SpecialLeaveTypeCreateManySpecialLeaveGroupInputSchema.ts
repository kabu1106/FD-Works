import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SpecialLeaveTypeCreateManySpecialLeaveGroupInputSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateManySpecialLeaveGroupInput> = z.strictObject({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean(),
});

export default SpecialLeaveTypeCreateManySpecialLeaveGroupInputSchema;
