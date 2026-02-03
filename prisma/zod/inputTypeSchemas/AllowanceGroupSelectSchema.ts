import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceTypeFindManyArgsSchema } from "../outputTypeSchemas/AllowanceTypeFindManyArgsSchema"
import { AllowanceGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/AllowanceGroupCountOutputTypeArgsSchema"

export const AllowanceGroupSelectSchema: z.ZodType<Prisma.AllowanceGroupSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  isActive: z.boolean().optional(),
  allowanceTypes: z.union([z.boolean(),z.lazy(() => AllowanceTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AllowanceGroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AllowanceGroupSelectSchema;
