import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupCreateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupCreateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupCreateOrConnectWithoutWorkGroupAssignmentInputSchema } from './WorkGroupCreateOrConnectWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupWhereUniqueInputSchema } from './WorkGroupWhereUniqueInputSchema';

export const WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkGroupCreateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkGroupCreateOrConnectWithoutWorkGroupAssignmentInputSchema).optional(),
  connect: z.lazy(() => WorkGroupWhereUniqueInputSchema).optional(),
});

export default WorkGroupCreateNestedOneWithoutWorkGroupAssignmentInputSchema;
