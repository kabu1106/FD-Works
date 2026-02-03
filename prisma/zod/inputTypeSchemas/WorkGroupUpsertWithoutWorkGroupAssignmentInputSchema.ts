import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupCreateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupCreateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupWhereInputSchema } from './WorkGroupWhereInputSchema';

export const WorkGroupUpsertWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.WorkGroupUpsertWithoutWorkGroupAssignmentInput> = z.strictObject({
  update: z.union([ z.lazy(() => WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema) ]),
  create: z.union([ z.lazy(() => WorkGroupCreateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema) ]),
  where: z.lazy(() => WorkGroupWhereInputSchema).optional(),
});

export default WorkGroupUpsertWithoutWorkGroupAssignmentInputSchema;
