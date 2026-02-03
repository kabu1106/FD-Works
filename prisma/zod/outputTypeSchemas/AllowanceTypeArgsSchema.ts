import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceTypeSelectSchema } from '../inputTypeSchemas/AllowanceTypeSelectSchema';
import { AllowanceTypeIncludeSchema } from '../inputTypeSchemas/AllowanceTypeIncludeSchema';

export const AllowanceTypeArgsSchema: z.ZodType<Prisma.AllowanceTypeDefaultArgs> = z.object({
  select: z.lazy(() => AllowanceTypeSelectSchema).optional(),
  include: z.lazy(() => AllowanceTypeIncludeSchema).optional(),
}).strict();

export default AllowanceTypeArgsSchema;
