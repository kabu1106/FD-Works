import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentCreateWithoutDutyInputSchema } from './SpecialLeaveAssignmentCreateWithoutDutyInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema';
import { SpecialLeaveAssignmentCreateOrConnectWithoutDutyInputSchema } from './SpecialLeaveAssignmentCreateOrConnectWithoutDutyInputSchema';
import { SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema } from './SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema';
import { SpecialLeaveAssignmentCreateManyDutyInputEnvelopeSchema } from './SpecialLeaveAssignmentCreateManyDutyInputEnvelopeSchema';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema } from './SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema';
import { SpecialLeaveAssignmentUpdateManyWithWhereWithoutDutyInputSchema } from './SpecialLeaveAssignmentUpdateManyWithWhereWithoutDutyInputSchema';
import { SpecialLeaveAssignmentScalarWhereInputSchema } from './SpecialLeaveAssignmentScalarWhereInputSchema';

export const SpecialLeaveAssignmentUncheckedUpdateManyWithoutDutyNestedInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUncheckedUpdateManyWithoutDutyNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateWithoutDutyInputSchema).array(), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpecialLeaveAssignmentCreateManyDutyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateManyWithWhereWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentUpdateManyWithWhereWithoutDutyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema), z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema).array() ]).optional(),
});

export default SpecialLeaveAssignmentUncheckedUpdateManyWithoutDutyNestedInputSchema;
