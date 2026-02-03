import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentCreateWithoutStaffInputSchema } from './SpecialLeaveAssignmentCreateWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema';

export const SpecialLeaveAssignmentCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema) ]),
});

export default SpecialLeaveAssignmentCreateOrConnectWithoutStaffInputSchema;
