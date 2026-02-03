import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeCreateNestedManyWithoutAllowanceGroupInputSchema } from './AllowanceTypeCreateNestedManyWithoutAllowanceGroupInputSchema';

export const AllowanceGroupCreateInputSchema: z.ZodType<Prisma.AllowanceGroupCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean().optional(),
  allowanceTypes: z.lazy(() => AllowanceTypeCreateNestedManyWithoutAllowanceGroupInputSchema).optional(),
});

export default AllowanceGroupCreateInputSchema;
