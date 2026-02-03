import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentUpdateWithoutDutyInputSchema } from './WorkGroupAssignmentUpdateWithoutDutyInputSchema';
import { WorkGroupAssignmentUncheckedUpdateWithoutDutyInputSchema } from './WorkGroupAssignmentUncheckedUpdateWithoutDutyInputSchema';

export const WorkGroupAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkGroupAssignmentUpdateWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedUpdateWithoutDutyInputSchema) ]),
});

export default WorkGroupAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema;
