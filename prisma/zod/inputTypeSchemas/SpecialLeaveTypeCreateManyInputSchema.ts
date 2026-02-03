import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SpecialLeaveTypeCreateManyInputSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  specialLeaveGroupId: z.string(),
  isActive: z.boolean(),
});

export default SpecialLeaveTypeCreateManyInputSchema;
