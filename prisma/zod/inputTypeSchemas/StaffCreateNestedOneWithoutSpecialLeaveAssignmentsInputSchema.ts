import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema } from './StaffCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema;
