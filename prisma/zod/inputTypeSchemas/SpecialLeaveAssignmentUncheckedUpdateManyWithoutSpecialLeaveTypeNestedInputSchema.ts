import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputEnvelopeSchema } from './SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputEnvelopeSchema';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentUpdateManyWithWhereWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUpdateManyWithWhereWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentScalarWhereInputSchema } from './SpecialLeaveAssignmentScalarWhereInputSchema';

export const SpecialLeaveAssignmentUncheckedUpdateManyWithoutSpecialLeaveTypeNestedInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUncheckedUpdateManyWithoutSpecialLeaveTypeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema).array(), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentCreateOrConnectWithoutSpecialLeaveTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutSpecialLeaveTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpecialLeaveAssignmentCreateManySpecialLeaveTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutSpecialLeaveTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateManyWithWhereWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentUpdateManyWithWhereWithoutSpecialLeaveTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema), z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema).array() ]).optional(),
});

export default SpecialLeaveAssignmentUncheckedUpdateManyWithoutSpecialLeaveTypeNestedInputSchema;
