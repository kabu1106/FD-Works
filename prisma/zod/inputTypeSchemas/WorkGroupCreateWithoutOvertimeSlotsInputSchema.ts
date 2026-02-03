import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentCreateNestedManyWithoutWorkGroupInputSchema } from './WorkGroupAssignmentCreateNestedManyWithoutWorkGroupInputSchema';

export const WorkGroupCreateWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.WorkGroupCreateWithoutOvertimeSlotsInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  WorkGroupAssignment: z.lazy(() => WorkGroupAssignmentCreateNestedManyWithoutWorkGroupInputSchema).optional(),
});

export default WorkGroupCreateWithoutOvertimeSlotsInputSchema;
