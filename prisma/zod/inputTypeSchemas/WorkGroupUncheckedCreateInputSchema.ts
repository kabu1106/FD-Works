import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotUncheckedCreateNestedManyWithoutWorkGroupInputSchema } from './OvertimeSlotUncheckedCreateNestedManyWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentUncheckedCreateNestedManyWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUncheckedCreateNestedManyWithoutWorkGroupInputSchema';

export const WorkGroupUncheckedCreateInputSchema: z.ZodType<Prisma.WorkGroupUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  overtimeSlots: z.lazy(() => OvertimeSlotUncheckedCreateNestedManyWithoutWorkGroupInputSchema).optional(),
  WorkGroupAssignment: z.lazy(() => WorkGroupAssignmentUncheckedCreateNestedManyWithoutWorkGroupInputSchema).optional(),
});

export default WorkGroupUncheckedCreateInputSchema;
