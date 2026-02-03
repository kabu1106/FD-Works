import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyCreateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';

export const DutyUpsertWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.DutyUpsertWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => DutyUpdateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema) ]),
  create: z.union([ z.lazy(() => DutyCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]),
  where: z.lazy(() => DutyWhereInputSchema).optional(),
});

export default DutyUpsertWithoutSpecialLeaveAssignmentsInputSchema;
