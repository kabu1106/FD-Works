import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentCreateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentCreateWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInputSchema } from './WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentUpsertWithWhereUniqueWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUpsertWithWhereUniqueWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentCreateManyWorkGroupInputEnvelopeSchema } from './WorkGroupAssignmentCreateManyWorkGroupInputEnvelopeSchema';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentUpdateWithWhereUniqueWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUpdateWithWhereUniqueWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentUpdateManyWithWhereWithoutWorkGroupInputSchema } from './WorkGroupAssignmentUpdateManyWithWhereWithoutWorkGroupInputSchema';
import { WorkGroupAssignmentScalarWhereInputSchema } from './WorkGroupAssignmentScalarWhereInputSchema';

export const WorkGroupAssignmentUpdateManyWithoutWorkGroupNestedInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateManyWithoutWorkGroupNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentCreateWithoutWorkGroupInputSchema).array(), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutWorkGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentCreateOrConnectWithoutWorkGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkGroupAssignmentUpsertWithWhereUniqueWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentUpsertWithWhereUniqueWithoutWorkGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkGroupAssignmentCreateManyWorkGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema), z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkGroupAssignmentUpdateWithWhereUniqueWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentUpdateWithWhereUniqueWithoutWorkGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkGroupAssignmentUpdateManyWithWhereWithoutWorkGroupInputSchema), z.lazy(() => WorkGroupAssignmentUpdateManyWithWhereWithoutWorkGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema), z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema).array() ]).optional(),
});

export default WorkGroupAssignmentUpdateManyWithoutWorkGroupNestedInputSchema;
