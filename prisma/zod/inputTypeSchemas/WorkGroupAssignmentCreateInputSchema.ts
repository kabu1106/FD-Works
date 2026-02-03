import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema } from './DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema';
import { WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema } from './WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema';
import { StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema } from './StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema';

export const WorkGroupAssignmentCreateInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema),
  workGroup: z.lazy(() => WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema),
});

export default WorkGroupAssignmentCreateInputSchema;
