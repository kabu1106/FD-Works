import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema: z.ZodType<Prisma.AllowanceGroupUncheckedCreateWithoutAllowanceTypesInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean().optional(),
});

export default AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema;
