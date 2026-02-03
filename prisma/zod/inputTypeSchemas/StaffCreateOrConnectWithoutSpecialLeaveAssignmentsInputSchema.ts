import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';

export const StaffCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]),
});

export default StaffCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema;
