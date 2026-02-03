import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentScalarWhereInputSchema } from './WorkGroupAssignmentScalarWhereInputSchema';
import { WorkGroupAssignmentUpdateManyMutationInputSchema } from './WorkGroupAssignmentUpdateManyMutationInputSchema';
import { WorkGroupAssignmentUncheckedUpdateManyWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUncheckedUpdateManyWithoutWorkGroupInputSchema';

export const WorkGroupAssignmentUpdateManyWithWhereWithoutWorkGroupInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateManyWithWhereWithoutWorkGroupInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkGroupAssignmentUpdateManyMutationInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedUpdateManyWithoutWorkGroupInputSchema) ]),
});

export default WorkGroupAssignmentUpdateManyWithWhereWithoutWorkGroupInputSchema;
