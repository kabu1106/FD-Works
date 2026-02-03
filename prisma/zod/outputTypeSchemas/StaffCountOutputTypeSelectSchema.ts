import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const StaffCountOutputTypeSelectSchema: z.ZodType<Prisma.StaffCountOutputTypeSelect> = z.object({
  workGroupAssignment: z.boolean().optional(),
  specialLeaveAssignments: z.boolean().optional(),
  IncidentStaff: z.boolean().optional(),
  Attendance: z.boolean().optional(),
  OvertimeSummary: z.boolean().optional(),
}).strict();

export default StaffCountOutputTypeSelectSchema;
