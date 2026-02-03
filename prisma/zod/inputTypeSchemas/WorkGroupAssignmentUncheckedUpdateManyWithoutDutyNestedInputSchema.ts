import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentCreateWithoutDutyInputSchema } from './WorkGroupAssignmentCreateWithoutDutyInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema';
import { WorkGroupAssignmentCreateOrConnectWithoutDutyInputSchema } from './WorkGroupAssignmentCreateOrConnectWithoutDutyInputSchema';
import { WorkGroupAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema } from './WorkGroupAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema';
import { WorkGroupAssignmentCreateManyDutyInputEnvelopeSchema } from './WorkGroupAssignmentCreateManyDutyInputEnvelopeSchema';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema } from './WorkGroupAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema';
import { WorkGroupAssignmentUpdateManyWithWhereWithoutDutyInputSchema } from './WorkGroupAssignmentUpdateManyWithWhereWithoutDutyInputSchema';
import { WorkGroupAssignmentScalarWhereInputSchema } from './WorkGroupAssignmentScalarWhereInputSchema';

export const WorkGroupAssignmentUncheckedUpdateManyWithoutDutyNestedInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUncheckedUpdateManyWithoutDutyNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentCreateWithoutDutyInputSchema).array(), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkGroupAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkGroupAssignmentCreateManyDutyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkGroupAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkGroupAssignmentUpdateManyWithWhereWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentUpdateManyWithWhereWithoutDutyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema), z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema).array() ]).optional(),
});

export default WorkGroupAssignmentUncheckedUpdateManyWithoutDutyNestedInputSchema;
