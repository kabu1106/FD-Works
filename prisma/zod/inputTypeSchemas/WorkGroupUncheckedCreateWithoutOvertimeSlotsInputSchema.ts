import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentUncheckedCreateNestedManyWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUncheckedCreateNestedManyWithoutWorkGroupInputSchema';

export const WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.WorkGroupUncheckedCreateWithoutOvertimeSlotsInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  WorkGroupAssignment: z.lazy(() => WorkGroupAssignmentUncheckedCreateNestedManyWithoutWorkGroupInputSchema).optional(),
});

export default WorkGroupUncheckedCreateWithoutOvertimeSlotsInputSchema;
