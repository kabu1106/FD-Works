import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema } from './StaffCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffUpsertWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUpsertWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { StaffUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './StaffUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema';

export const StaffUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutSpecialLeaveAssignmentsInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => StaffUpdateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema) ]).optional(),
});

export default StaffUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema;
