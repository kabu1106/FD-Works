import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupCreateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupCreateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupCreateOrConnectWithoutWorkGroupAssignmentInputSchema } from './WorkGroupCreateOrConnectWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupUpsertWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUpsertWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupWhereUniqueInputSchema } from './WorkGroupWhereUniqueInputSchema';
import { WorkGroupUpdateToOneWithWhereWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUpdateToOneWithWhereWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema';
import { WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema } from './WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema';

export const WorkGroupUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema: z.ZodType<Prisma.WorkGroupUpdateOneRequiredWithoutWorkGroupAssignmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkGroupCreateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => WorkGroupUncheckedCreateWithoutWorkGroupAssignmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkGroupCreateOrConnectWithoutWorkGroupAssignmentInputSchema).optional(),
  upsert: z.lazy(() => WorkGroupUpsertWithoutWorkGroupAssignmentInputSchema).optional(),
  connect: z.lazy(() => WorkGroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkGroupUpdateToOneWithWhereWithoutWorkGroupAssignmentInputSchema), z.lazy(() => WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema) ]).optional(),
});

export default WorkGroupUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema;
