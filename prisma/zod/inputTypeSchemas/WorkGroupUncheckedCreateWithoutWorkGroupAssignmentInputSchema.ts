import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotUncheckedCreateNestedManyWithoutWorkGroupInputSchema } from './OvertimeSlotUncheckedCreateNestedManyWithoutWorkGroupInputSchema';

export const WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  overtimeSlots: z.lazy(() => OvertimeSlotUncheckedCreateNestedManyWithoutWorkGroupInputSchema).optional(),
});

export default WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema;
