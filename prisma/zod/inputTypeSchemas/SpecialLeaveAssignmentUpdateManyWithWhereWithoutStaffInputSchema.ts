import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentScalarWhereInputSchema } from './SpecialLeaveAssignmentScalarWhereInputSchema';
import { SpecialLeaveAssignmentUpdateManyMutationInputSchema } from './SpecialLeaveAssignmentUpdateManyMutationInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffInputSchema';

export const SpecialLeaveAssignmentUpdateManyWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpdateManyWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateManyMutationInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffInputSchema) ]),
});

export default SpecialLeaveAssignmentUpdateManyWithWhereWithoutStaffInputSchema;
