import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentUpdateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUpdateWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentUncheckedUpdateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUncheckedUpdateWithoutWorkGroupInputSchema';

export const WorkGroupAssignmentUpdateWithWhereUniqueWithoutWorkGroupInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateWithWhereUniqueWithoutWorkGroupInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkGroupAssignmentUpdateWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedUpdateWithoutWorkGroupInputSchema) ]),
});

export default WorkGroupAssignmentUpdateWithWhereUniqueWithoutWorkGroupInputSchema;
