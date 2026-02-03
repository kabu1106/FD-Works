import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentCreateWithoutDutyInputSchema } from './SpecialLeaveAssignmentCreateWithoutDutyInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema';

export const SpecialLeaveAssignmentCreateOrConnectWithoutDutyInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentCreateOrConnectWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema) ]),
});

export default SpecialLeaveAssignmentCreateOrConnectWithoutDutyInputSchema;
