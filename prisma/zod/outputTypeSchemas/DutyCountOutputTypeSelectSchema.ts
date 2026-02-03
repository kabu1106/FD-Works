import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DutyCountOutputTypeSelectSchema: z.ZodType<Prisma.DutyCountOutputTypeSelect> = z.object({
  workGroupAssignments: z.boolean().optional(),
  specialLeaveAssignments: z.boolean().optional(),
  incidents: z.boolean().optional(),
  attendance: z.boolean().optional(),
  OvertimeSummary: z.boolean().optional(),
}).strict();

export default DutyCountOutputTypeSelectSchema;
