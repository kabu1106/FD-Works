import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentCreateWithoutDutyInputSchema } from './SpecialLeaveAssignmentCreateWithoutDutyInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema';
import { SpecialLeaveAssignmentCreateOrConnectWithoutDutyInputSchema } from './SpecialLeaveAssignmentCreateOrConnectWithoutDutyInputSchema';
import { SpecialLeaveAssignmentCreateManyDutyInputEnvelopeSchema } from './SpecialLeaveAssignmentCreateManyDutyInputEnvelopeSchema';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';

export const SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutDutyInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateWithoutDutyInputSchema).array(), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpecialLeaveAssignmentCreateManyDutyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
});

export default SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutDutyInputSchema;
