import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkGroupAssignmentCreateManyInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  staffId: z.number().int(),
  workGroupId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default WorkGroupAssignmentCreateManyInputSchema;
