import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentCreateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentCreateWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInputSchema } from './WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentCreateManyWorkGroupInputEnvelopeSchema } from './WorkGroupAssignmentCreateManyWorkGroupInputEnvelopeSchema';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';

export const WorkGroupAssignmentCreateNestedManyWithoutWorkGroupInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateNestedManyWithoutWorkGroupInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentCreateWithoutWorkGroupInputSchema).array(), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkGroupAssignmentCreateManyWorkGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
});

export default WorkGroupAssignmentCreateNestedManyWithoutWorkGroupInputSchema;
