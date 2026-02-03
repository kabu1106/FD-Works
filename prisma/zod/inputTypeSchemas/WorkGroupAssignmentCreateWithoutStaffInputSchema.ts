import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema } from './DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema';
import { WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema } from './WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema';

export const WorkGroupAssignmentCreateWithoutStaffInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema),
  workGroup: z.lazy(() => WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema),
});

export default WorkGroupAssignmentCreateWithoutStaffInputSchema;
