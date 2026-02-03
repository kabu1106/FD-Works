import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export default SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema;
