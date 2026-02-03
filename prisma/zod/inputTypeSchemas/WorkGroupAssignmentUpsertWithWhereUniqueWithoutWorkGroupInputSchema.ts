import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentUpdateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUpdateWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentUncheckedUpdateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUncheckedUpdateWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentCreateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentCreateWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema';

export const WorkGroupAssignmentUpsertWithWhereUniqueWithoutWorkGroupInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpsertWithWhereUniqueWithoutWorkGroupInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkGroupAssignmentUpdateWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedUpdateWithoutWorkGroupInputSchema) ]),
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema) ]),
});

export default WorkGroupAssignmentUpsertWithWhereUniqueWithoutWorkGroupInputSchema;
