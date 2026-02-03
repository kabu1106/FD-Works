import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SpecialLeaveGroupCreateManyInputSchema: z.ZodType<Prisma.SpecialLeaveGroupCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export default SpecialLeaveGroupCreateManyInputSchema;
