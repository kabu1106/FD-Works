import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentScalarWhereInputSchema } from './WorkGroupAssignmentScalarWhereInputSchema';
import { WorkGroupAssignmentUpdateManyMutationInputSchema } from './WorkGroupAssignmentUpdateManyMutationInputSchema';
import { WorkGroupAssignmentUncheckedUpdateManyWithoutStaffInputSchema } from './WorkGroupAssignmentUncheckedUpdateManyWithoutStaffInputSchema';

export const WorkGroupAssignmentUpdateManyWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateManyWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkGroupAssignmentUpdateManyMutationInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedUpdateManyWithoutStaffInputSchema) ]),
});

export default WorkGroupAssignmentUpdateManyWithWhereWithoutStaffInputSchema;
