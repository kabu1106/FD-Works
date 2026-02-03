import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema } from './DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema';
import { StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema } from './StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema';

export const WorkGroupAssignmentCreateWithoutWorkGroupInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateWithoutWorkGroupInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema),
});

export default WorkGroupAssignmentCreateWithoutWorkGroupInputSchema;
