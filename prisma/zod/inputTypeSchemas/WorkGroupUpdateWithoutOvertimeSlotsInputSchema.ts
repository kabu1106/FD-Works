import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { WorkGroupAssignmentUpdateManyWithoutWorkGroupNestedInputSchema } from './WorkGroupAssignmentUpdateManyWithoutWorkGroupNestedInputSchema';

export const WorkGroupUpdateWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.WorkGroupUpdateWithoutOvertimeSlotsInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  WorkGroupAssignment: z.lazy(() => WorkGroupAssignmentUpdateManyWithoutWorkGroupNestedInputSchema).optional(),
});

export default WorkGroupUpdateWithoutOvertimeSlotsInputSchema;
