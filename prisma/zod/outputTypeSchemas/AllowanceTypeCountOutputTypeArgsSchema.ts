import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceTypeCountOutputTypeSelectSchema } from './AllowanceTypeCountOutputTypeSelectSchema';

export const AllowanceTypeCountOutputTypeArgsSchema: z.ZodType<Prisma.AllowanceTypeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AllowanceTypeCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AllowanceTypeCountOutputTypeSelectSchema;
