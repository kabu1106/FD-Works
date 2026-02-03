import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUncheckedCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  staffId: z.number().int(),
  workGroupId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema;
