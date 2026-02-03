import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceTypeFindManyArgsSchema } from "../outputTypeSchemas/AllowanceTypeFindManyArgsSchema"
import { AllowanceGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/AllowanceGroupCountOutputTypeArgsSchema"

export const AllowanceGroupIncludeSchema: z.ZodType<Prisma.AllowanceGroupInclude> = z.object({
  allowanceTypes: z.union([z.boolean(),z.lazy(() => AllowanceTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AllowanceGroupCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default AllowanceGroupIncludeSchema;
