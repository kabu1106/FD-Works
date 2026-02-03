import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { DutyUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUpdateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema';

export const DutyUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.DutyUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  where: z.lazy(() => DutyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DutyUpdateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutSpecialLeaveAssignmentsInputSchema) ]),
});

export default DutyUpdateToOneWithWhereWithoutSpecialLeaveAssignmentsInputSchema;
