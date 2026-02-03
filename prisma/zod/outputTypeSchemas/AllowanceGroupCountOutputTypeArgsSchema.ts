import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupCountOutputTypeSelectSchema } from './AllowanceGroupCountOutputTypeSelectSchema';

export const AllowanceGroupCountOutputTypeArgsSchema: z.ZodType<Prisma.AllowanceGroupCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AllowanceGroupCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AllowanceGroupCountOutputTypeSelectSchema;
