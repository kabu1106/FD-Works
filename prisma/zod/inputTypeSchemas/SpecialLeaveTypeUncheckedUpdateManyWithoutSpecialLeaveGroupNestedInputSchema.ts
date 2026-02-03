import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeUpsertWithWhereUniqueWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUpsertWithWhereUniqueWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeCreateManySpecialLeaveGroupInputEnvelopeSchema } from './SpecialLeaveTypeCreateManySpecialLeaveGroupInputEnvelopeSchema';
import { SpecialLeaveTypeWhereUniqueInputSchema } from './SpecialLeaveTypeWhereUniqueInputSchema';
import { SpecialLeaveTypeUpdateWithWhereUniqueWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUpdateWithWhereUniqueWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeUpdateManyWithWhereWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUpdateManyWithWhereWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeScalarWhereInputSchema } from './SpecialLeaveTypeScalarWhereInputSchema';

export const SpecialLeaveTypeUncheckedUpdateManyWithoutSpecialLeaveGroupNestedInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUncheckedUpdateManyWithoutSpecialLeaveGroupNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema).array(), z.lazy(() => SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SpecialLeaveTypeUpsertWithWhereUniqueWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeUpsertWithWhereUniqueWithoutSpecialLeaveGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpecialLeaveTypeCreateManySpecialLeaveGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema), z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema), z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema), z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema), z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SpecialLeaveTypeUpdateWithWhereUniqueWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeUpdateWithWhereUniqueWithoutSpecialLeaveGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SpecialLeaveTypeUpdateManyWithWhereWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeUpdateManyWithWhereWithoutSpecialLeaveGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SpecialLeaveTypeScalarWhereInputSchema), z.lazy(() => SpecialLeaveTypeScalarWhereInputSchema).array() ]).optional(),
});

export default SpecialLeaveTypeUncheckedUpdateManyWithoutSpecialLeaveGroupNestedInputSchema;
