import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema) ]),
});

export default SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInputSchema;
