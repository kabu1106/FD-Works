import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AllowanceTypeCreateManyAllowanceGroupInputSchema: z.ZodType<Prisma.AllowanceTypeCreateManyAllowanceGroupInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
});

export default AllowanceTypeCreateManyAllowanceGroupInputSchema;
