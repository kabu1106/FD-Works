import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupWhereUniqueInputSchema } from './WorkGroupWhereUniqueInputSchema';
import { WorkGroupCreateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupCreateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema';

export const WorkGroupCreateOrConnectWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.WorkGroupCreateOrConnectWithoutWorkGroupAssignmentInput> = z.strictObject({
  where: z.lazy(() => WorkGroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkGroupCreateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema) ]),
});

export default WorkGroupCreateOrConnectWithoutWorkGroupAssignmentInputSchema;
