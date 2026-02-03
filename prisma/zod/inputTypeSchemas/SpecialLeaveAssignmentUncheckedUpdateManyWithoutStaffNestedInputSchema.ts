import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentCreateWithoutStaffInputSchema } from './SpecialLeaveAssignmentCreateWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema';
import { SpecialLeaveAssignmentCreateOrConnectWithoutStaffInputSchema } from './SpecialLeaveAssignmentCreateOrConnectWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema } from './SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema';
import { SpecialLeaveAssignmentCreateManyStaffInputEnvelopeSchema } from './SpecialLeaveAssignmentCreateManyStaffInputEnvelopeSchema';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema } from './SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUpdateManyWithWhereWithoutStaffInputSchema } from './SpecialLeaveAssignmentUpdateManyWithWhereWithoutStaffInputSchema';
import { SpecialLeaveAssignmentScalarWhereInputSchema } from './SpecialLeaveAssignmentScalarWhereInputSchema';

export const SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateWithoutStaffInputSchema).array(), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpecialLeaveAssignmentCreateManyStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateManyWithWhereWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentUpdateManyWithWhereWithoutStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema), z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema).array() ]).optional(),
});

export default SpecialLeaveAssignmentUncheckedUpdateManyWithoutStaffNestedInputSchema;
