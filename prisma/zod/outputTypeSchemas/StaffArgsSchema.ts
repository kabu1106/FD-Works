import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffSelectSchema } from '../inputTypeSchemas/StaffSelectSchema';
import { StaffIncludeSchema } from '../inputTypeSchemas/StaffIncludeSchema';

export const StaffArgsSchema: z.ZodType<Prisma.StaffDefaultArgs> = z.object({
  select: z.lazy(() => StaffSelectSchema).optional(),
  include: z.lazy(() => StaffIncludeSchema).optional(),
}).strict();

export default StaffArgsSchema;
