import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputEnvelopeSchema } from './SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputEnvelopeSchema';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';

export const SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutSpecialLeaveTypeInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema).array(), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
});

export default SpecialLeaveAssignmentUncheckedCreateNestedManyWithoutSpecialLeaveTypeInputSchema;
