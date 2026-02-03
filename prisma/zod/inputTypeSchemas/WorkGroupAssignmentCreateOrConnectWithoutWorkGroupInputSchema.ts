import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentCreateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentCreateWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema';

export const WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInputSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema) ]),
});

export default WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInputSchema;
