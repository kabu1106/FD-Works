import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentUpdateWithoutStaffInputSchema } from './WorkGroupAssignmentUpdateWithoutStaffInputSchema';
import { WorkGroupAssignmentUncheckedUpdateWithoutStaffInputSchema } from './WorkGroupAssignmentUncheckedUpdateWithoutStaffInputSchema';

export const WorkGroupAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkGroupAssignmentUpdateWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default WorkGroupAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema;
