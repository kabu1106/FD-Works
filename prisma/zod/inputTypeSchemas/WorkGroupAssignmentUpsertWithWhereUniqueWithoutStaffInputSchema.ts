import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentUpdateWithoutStaffInputSchema } from './WorkGroupAssignmentUpdateWithoutStaffInputSchema';
import { WorkGroupAssignmentUncheckedUpdateWithoutStaffInputSchema } from './WorkGroupAssignmentUncheckedUpdateWithoutStaffInputSchema';
import { WorkGroupAssignmentCreateWithoutStaffInputSchema } from './WorkGroupAssignmentCreateWithoutStaffInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema';

export const WorkGroupAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpsertWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkGroupAssignmentUpdateWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema) ]),
});

export default WorkGroupAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema;
