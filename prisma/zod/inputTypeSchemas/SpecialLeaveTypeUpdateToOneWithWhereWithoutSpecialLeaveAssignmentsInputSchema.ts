import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeWhereInputSchema } from './SpecialLeaveTypeWhereInputSchema';
import { SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema';

export const SpecialLeaveTypeUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveTypeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema) ]),
});

export default SpecialLeaveTypeUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema;
