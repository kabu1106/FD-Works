import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AllowanceGroupCreateManyInputSchema: z.ZodType<Prisma.AllowanceGroupCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean().optional(),
});

export default AllowanceGroupCreateManyInputSchema;
