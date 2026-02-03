import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupSelectSchema } from '../inputTypeSchemas/AllowanceGroupSelectSchema';
import { AllowanceGroupIncludeSchema } from '../inputTypeSchemas/AllowanceGroupIncludeSchema';

export const AllowanceGroupArgsSchema: z.ZodType<Prisma.AllowanceGroupDefaultArgs> = z.object({
  select: z.lazy(() => AllowanceGroupSelectSchema).optional(),
  include: z.lazy(() => AllowanceGroupIncludeSchema).optional(),
}).strict();

export default AllowanceGroupArgsSchema;
