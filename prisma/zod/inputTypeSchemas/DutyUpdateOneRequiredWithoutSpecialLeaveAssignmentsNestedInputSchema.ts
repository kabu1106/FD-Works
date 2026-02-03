import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema } from './DutyCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyUpsertWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUpsertWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema';

export const DutyUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema: z.ZodType<Prisma.DutyUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema).optional(),
  upsert: z.lazy(() => DutyUpsertWithoutSpecialLeaveAssignmentsInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DutyUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => DutyUpdateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema) ]).optional(),
});

export default DutyUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema;
