import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentCreateWithoutStaffInputSchema } from './SpecialLeaveAssignmentCreateWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema';
import { SpecialLeaveAssignmentCreateOrConnectWithoutStaffInputSchema } from './SpecialLeaveAssignmentCreateOrConnectWithoutStaffInputSchema';
import { SpecialLeaveAssignmentCreateManyStaffInputEnvelopeSchema } from './SpecialLeaveAssignmentCreateManyStaffInputEnvelopeSchema';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';

export const SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateWithoutStaffInputSchema).array(), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpecialLeaveAssignmentCreateManyStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
});

export default SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutStaffInputSchema;
