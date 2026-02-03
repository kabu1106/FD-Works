import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema } from './DutyCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';

export const DutyCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.DutyCreateNestedOneWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
});

export default DutyCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema;
