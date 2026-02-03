import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUncheckedCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  staffId: z.number().int(),
  specialLeaveTypeId: z.string(),
  baseDate: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema;
