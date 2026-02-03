import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeWhereUniqueInputSchema } from './SpecialLeaveTypeWhereUniqueInputSchema';
import { SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';

export const SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]),
});

export default SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema;
