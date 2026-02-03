import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeUncheckedCreateNestedManyWithoutAllowanceGroupInputSchema } from './AllowanceTypeUncheckedCreateNestedManyWithoutAllowanceGroupInputSchema';

export const AllowanceGroupUncheckedCreateInputSchema: z.ZodType<Prisma.AllowanceGroupUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean().optional(),
  allowanceTypes: z.lazy(() => AllowanceTypeUncheckedCreateNestedManyWithoutAllowanceGroupInputSchema).optional(),
});

export default AllowanceGroupUncheckedCreateInputSchema;
