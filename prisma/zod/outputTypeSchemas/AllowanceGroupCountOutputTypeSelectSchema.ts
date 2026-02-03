import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AllowanceGroupCountOutputTypeSelectSchema: z.ZodType<Prisma.AllowanceGroupCountOutputTypeSelect> = z.object({
  allowanceTypes: z.boolean().optional(),
}).strict();

export default AllowanceGroupCountOutputTypeSelectSchema;
