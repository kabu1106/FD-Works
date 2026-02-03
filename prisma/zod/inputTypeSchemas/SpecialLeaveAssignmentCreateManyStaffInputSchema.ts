import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SpecialLeaveAssignmentCreateManyStaffInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentCreateManyStaffInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  specialLeaveTypeId: z.string(),
  baseDate: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default SpecialLeaveAssignmentCreateManyStaffInputSchema;
