import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeUpsertWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUpsertWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeWhereUniqueInputSchema } from './SpecialLeaveTypeWhereUniqueInputSchema';
import { SpecialLeaveTypeUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema';

export const SpecialLeaveTypeUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema).optional(),
  upsert: z.lazy(() => SpecialLeaveTypeUpsertWithoutSpecialLeaveAssignmentsInputSchema).optional(),
  connect: z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SpecialLeaveTypeUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema) ]).optional(),
});

export default SpecialLeaveTypeUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema;
