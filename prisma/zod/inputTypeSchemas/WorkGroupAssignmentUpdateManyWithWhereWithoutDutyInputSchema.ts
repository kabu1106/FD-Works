import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentScalarWhereInputSchema } from './WorkGroupAssignmentScalarWhereInputSchema';
import { WorkGroupAssignmentUpdateManyMutationInputSchema } from './WorkGroupAssignmentUpdateManyMutationInputSchema';
import { WorkGroupAssignmentUncheckedUpdateManyWithoutDutyInputSchema } from './WorkGroupAssignmentUncheckedUpdateManyWithoutDutyInputSchema';

export const WorkGroupAssignmentUpdateManyWithWhereWithoutDutyInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateManyWithWhereWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkGroupAssignmentUpdateManyMutationInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedUpdateManyWithoutDutyInputSchema) ]),
});

export default WorkGroupAssignmentUpdateManyWithWhereWithoutDutyInputSchema;
