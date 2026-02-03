import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentCreateWithoutStaffInputSchema } from './WorkGroupAssignmentCreateWithoutStaffInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema';
import { WorkGroupAssignmentCreateOrConnectWithoutStaffInputSchema } from './WorkGroupAssignmentCreateOrConnectWithoutStaffInputSchema';
import { WorkGroupAssignmentCreateManyStaffInputEnvelopeSchema } from './WorkGroupAssignmentCreateManyStaffInputEnvelopeSchema';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';

export const WorkGroupAssignmentCreateNestedManyWithoutStaffInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateNestedManyWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentCreateWithoutStaffInputSchema).array(), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkGroupAssignmentCreateManyStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
});

export default WorkGroupAssignmentCreateNestedManyWithoutStaffInputSchema;
