import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentScalarWhereInputSchema } from './SpecialLeaveAssignmentScalarWhereInputSchema';
import { SpecialLeaveAssignmentUpdateManyMutationInputSchema } from './SpecialLeaveAssignmentUpdateManyMutationInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateManyWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateManyWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveAssignmentUpdateManyWithWhereWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpdateManyWithWhereWithoutSpecialLeaveTypeInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateManyMutationInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateManyWithoutSpecialLeaveTypeInputSchema) ]),
});

export default SpecialLeaveAssignmentUpdateManyWithWhereWithoutSpecialLeaveTypeInputSchema;
