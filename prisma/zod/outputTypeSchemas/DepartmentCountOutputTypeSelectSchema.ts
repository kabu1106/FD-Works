import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DepartmentCountOutputTypeSelectSchema: z.ZodType<Prisma.DepartmentCountOutputTypeSelect> = z.object({
  teams: z.boolean().optional(),
  vehicle: z.boolean().optional(),
  attendance: z.boolean().optional(),
}).strict();

export default DepartmentCountOutputTypeSelectSchema;
