import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentScalarWhereInputSchema } from './SpecialLeaveAssignmentScalarWhereInputSchema';
import { SpecialLeaveAssignmentUpdateManyMutationInputSchema } from './SpecialLeaveAssignmentUpdateManyMutationInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateManyWithoutDutyInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateManyWithoutDutyInputSchema';

export const SpecialLeaveAssignmentUpdateManyWithWhereWithoutDutyInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpdateManyWithWhereWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateManyMutationInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateManyWithoutDutyInputSchema) ]),
});

export default SpecialLeaveAssignmentUpdateManyWithWhereWithoutDutyInputSchema;
