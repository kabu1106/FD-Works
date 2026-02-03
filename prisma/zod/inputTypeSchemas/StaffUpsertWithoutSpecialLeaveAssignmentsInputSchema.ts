import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffCreateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.StaffUpsertWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutSpecialLeaveAssignmentsInputSchema;
