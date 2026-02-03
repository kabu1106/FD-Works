import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUncheckedCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  workGroupId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema;
