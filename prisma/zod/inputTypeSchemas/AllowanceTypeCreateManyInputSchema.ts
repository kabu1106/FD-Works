import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AllowanceTypeCreateManyInputSchema: z.ZodType<Prisma.AllowanceTypeCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  allowanceGroupId: z.number().int(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
});

export default AllowanceTypeCreateManyInputSchema;
