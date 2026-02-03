import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AllowanceTypeCountOutputTypeSelectSchema: z.ZodType<Prisma.AllowanceTypeCountOutputTypeSelect> = z.object({
  IncidentStaffAllowance: z.boolean().optional(),
  IncidentAllowanceSummary: z.boolean().optional(),
}).strict();

export default AllowanceTypeCountOutputTypeSelectSchema;
