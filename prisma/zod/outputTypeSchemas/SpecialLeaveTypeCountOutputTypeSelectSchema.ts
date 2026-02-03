import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SpecialLeaveTypeCountOutputTypeSelectSchema: z.ZodType<Prisma.SpecialLeaveTypeCountOutputTypeSelect> = z.object({
  specialLeaveAssignments: z.boolean().optional(),
}).strict();

export default SpecialLeaveTypeCountOutputTypeSelectSchema;
