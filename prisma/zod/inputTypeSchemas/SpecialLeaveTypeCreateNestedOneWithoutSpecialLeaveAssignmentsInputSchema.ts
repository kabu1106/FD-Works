import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema } from './SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema';
import { SpecialLeaveTypeWhereUniqueInputSchema } from './SpecialLeaveTypeWhereUniqueInputSchema';

export const SpecialLeaveTypeCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateNestedOneWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveTypeCreateWithoutSpecialLeaveAssignmentsInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveAssignmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveAssignmentsInputSchema).optional(),
  connect: z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema).optional(),
});

export default SpecialLeaveTypeCreateNestedOneWithoutSpecialLeaveAssignmentsInputSchema;
