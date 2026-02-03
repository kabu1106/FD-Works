import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentCreateWithoutStaffInputSchema } from './WorkGroupAssignmentCreateWithoutStaffInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema';
import { WorkGroupAssignmentCreateOrConnectWithoutStaffInputSchema } from './WorkGroupAssignmentCreateOrConnectWithoutStaffInputSchema';
import { WorkGroupAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema } from './WorkGroupAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema';
import { WorkGroupAssignmentCreateManyStaffInputEnvelopeSchema } from './WorkGroupAssignmentCreateManyStaffInputEnvelopeSchema';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema } from './WorkGroupAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema';
import { WorkGroupAssignmentUpdateManyWithWhereWithoutStaffInputSchema } from './WorkGroupAssignmentUpdateManyWithWhereWithoutStaffInputSchema';
import { WorkGroupAssignmentScalarWhereInputSchema } from './WorkGroupAssignmentScalarWhereInputSchema';

export const WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateManyWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentCreateWithoutStaffInputSchema).array(), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkGroupAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkGroupAssignmentCreateManyStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkGroupAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkGroupAssignmentUpdateManyWithWhereWithoutStaffInputSchema), z.lazy(() => WorkGroupAssignmentUpdateManyWithWhereWithoutStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema), z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema).array() ]).optional(),
});

export default WorkGroupAssignmentUpdateManyWithoutStaffNestedInputSchema;
