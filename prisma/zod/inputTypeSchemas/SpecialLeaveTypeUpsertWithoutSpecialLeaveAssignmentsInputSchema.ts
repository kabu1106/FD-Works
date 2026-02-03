import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeWhereInputSchema } from './SpecialLeaveTypeWhereInputSchema';

export const SpecialLeaveTypeUpsertWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUpsertWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema) ]),
  create: z.union([ z.lazy(() => SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]),
  where: z.lazy(() => SpecialLeaveTypeWhereInputSchema).optional(),
});

export default SpecialLeaveTypeUpsertWithoutSpecialLeaveAssignmentsInputSchema;
