import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotCreateNestedManyWithoutWorkGroupInputSchema } from './OvertimeSlotCreateNestedManyWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentCreateNestedManyWithoutWorkGroupInputSchema } from './WorkGroupAssignmentCreateNestedManyWithoutWorkGroupInputSchema';

export const WorkGroupCreateInputSchema: z.ZodType<Prisma.WorkGroupCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  overtimeSlots: z.lazy(() => OvertimeSlotCreateNestedManyWithoutWorkGroupInputSchema).optional(),
  WorkGroupAssignment: z.lazy(() => WorkGroupAssignmentCreateNestedManyWithoutWorkGroupInputSchema).optional(),
});

export default WorkGroupCreateInputSchema;
