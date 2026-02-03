import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const IncidentStaffCountOutputTypeSelectSchema: z.ZodType<Prisma.IncidentStaffCountOutputTypeSelect> = z.object({
  allowances: z.boolean().optional(),
  IncidentAllowanceSummary: z.boolean().optional(),
}).strict();

export default IncidentStaffCountOutputTypeSelectSchema;
