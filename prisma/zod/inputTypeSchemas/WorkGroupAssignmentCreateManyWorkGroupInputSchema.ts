import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkGroupAssignmentCreateManyWorkGroupInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateManyWorkGroupInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  staffId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default WorkGroupAssignmentCreateManyWorkGroupInputSchema;
