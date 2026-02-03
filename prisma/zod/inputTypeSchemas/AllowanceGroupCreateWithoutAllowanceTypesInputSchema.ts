import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AllowanceGroupCreateWithoutAllowanceTypesInputSchema: z.ZodType<Prisma.AllowanceGroupCreateWithoutAllowanceTypesInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean().optional(),
});

export default AllowanceGroupCreateWithoutAllowanceTypesInputSchema;
