import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotCreateNestedManyWithoutWorkGroupInputSchema } from './OvertimeSlotCreateNestedManyWithoutWorkGroupInputSchema';

export const WorkGroupCreateWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.WorkGroupCreateWithoutWorkGroupAssignmentInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  overtimeSlots: z.lazy(() => OvertimeSlotCreateNestedManyWithoutWorkGroupInputSchema).optional(),
});

export default WorkGroupCreateWithoutWorkGroupAssignmentInputSchema;
