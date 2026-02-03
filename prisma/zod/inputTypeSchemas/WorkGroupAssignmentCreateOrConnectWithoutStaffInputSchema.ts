import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentCreateWithoutStaffInputSchema } from './WorkGroupAssignmentCreateWithoutStaffInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema';

export const WorkGroupAssignmentCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema) ]),
});

export default WorkGroupAssignmentCreateOrConnectWithoutStaffInputSchema;
