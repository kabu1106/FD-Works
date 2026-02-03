import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema } from './WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema';
import { StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema } from './StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema';

export const WorkGroupAssignmentCreateWithoutDutyInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workGroup: z.lazy(() => WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema),
});

export default WorkGroupAssignmentCreateWithoutDutyInputSchema;
