import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentCreateWithoutDutyInputSchema } from './WorkGroupAssignmentCreateWithoutDutyInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema';
import { WorkGroupAssignmentCreateOrConnectWithoutDutyInputSchema } from './WorkGroupAssignmentCreateOrConnectWithoutDutyInputSchema';
import { WorkGroupAssignmentCreateManyDutyInputEnvelopeSchema } from './WorkGroupAssignmentCreateManyDutyInputEnvelopeSchema';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';

export const WorkGroupAssignmentCreateNestedManyWithoutDutyInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateNestedManyWithoutDutyInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentCreateWithoutDutyInputSchema).array(), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkGroupAssignmentCreateManyDutyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
});

export default WorkGroupAssignmentCreateNestedManyWithoutDutyInputSchema;
