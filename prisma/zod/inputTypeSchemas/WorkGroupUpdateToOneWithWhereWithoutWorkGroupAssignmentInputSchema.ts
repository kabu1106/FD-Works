import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupWhereInputSchema } from './WorkGroupWhereInputSchema';
import { WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema';

export const WorkGroupUpdateToOneWithWhereWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.WorkGroupUpdateToOneWithWhereWithoutWorkGroupAssignmentInput> = z.strictObject({
  where: z.lazy(() => WorkGroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema) ]),
});

export default WorkGroupUpdateToOneWithWhereWithoutWorkGroupAssignmentInputSchema;
