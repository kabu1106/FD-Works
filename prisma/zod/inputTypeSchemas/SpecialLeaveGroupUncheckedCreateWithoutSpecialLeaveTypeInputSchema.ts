import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export default SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema;
