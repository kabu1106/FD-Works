import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentCreateWithoutDutyInputSchema } from './WorkGroupAssignmentCreateWithoutDutyInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema';

export const WorkGroupAssignmentCreateOrConnectWithoutDutyInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateOrConnectWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema) ]),
});

export default WorkGroupAssignmentCreateOrConnectWithoutDutyInputSchema;
