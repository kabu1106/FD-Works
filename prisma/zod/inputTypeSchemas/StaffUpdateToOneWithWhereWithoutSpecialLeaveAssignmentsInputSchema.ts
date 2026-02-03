import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema';

export const StaffUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema;
