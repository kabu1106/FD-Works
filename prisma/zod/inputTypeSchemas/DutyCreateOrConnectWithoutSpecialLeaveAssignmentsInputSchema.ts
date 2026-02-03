import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyCreateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';

export const DutyCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.DutyCreateOrConnectWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  where: z.lazy(() => DutyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DutyCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]),
});

export default DutyCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema;
