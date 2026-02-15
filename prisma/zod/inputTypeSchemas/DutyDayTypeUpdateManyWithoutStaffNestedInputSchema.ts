import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeCreateWithoutStaffInputSchema } from './DutyDayTypeCreateWithoutStaffInputSchema';
import { DutyDayTypeUncheckedCreateWithoutStaffInputSchema } from './DutyDayTypeUncheckedCreateWithoutStaffInputSchema';
import { DutyDayTypeCreateOrConnectWithoutStaffInputSchema } from './DutyDayTypeCreateOrConnectWithoutStaffInputSchema';
import { DutyDayTypeUpsertWithWhereUniqueWithoutStaffInputSchema } from './DutyDayTypeUpsertWithWhereUniqueWithoutStaffInputSchema';
import { DutyDayTypeCreateManyStaffInputEnvelopeSchema } from './DutyDayTypeCreateManyStaffInputEnvelopeSchema';
import { DutyDayTypeWhereUniqueInputSchema } from './DutyDayTypeWhereUniqueInputSchema';
import { DutyDayTypeUpdateWithWhereUniqueWithoutStaffInputSchema } from './DutyDayTypeUpdateWithWhereUniqueWithoutStaffInputSchema';
import { DutyDayTypeUpdateManyWithWhereWithoutStaffInputSchema } from './DutyDayTypeUpdateManyWithWhereWithoutStaffInputSchema';
import { DutyDayTypeScalarWhereInputSchema } from './DutyDayTypeScalarWhereInputSchema';

export const DutyDayTypeUpdateManyWithoutStaffNestedInputSchema: z.ZodType<Prisma.DutyDayTypeUpdateManyWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyDayTypeCreateWithoutStaffInputSchema), z.lazy(() => DutyDayTypeCreateWithoutStaffInputSchema).array(), z.lazy(() => DutyDayTypeUncheckedCreateWithoutStaffInputSchema), z.lazy(() => DutyDayTypeUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DutyDayTypeCreateOrConnectWithoutStaffInputSchema), z.lazy(() => DutyDayTypeCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DutyDayTypeUpsertWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => DutyDayTypeUpsertWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DutyDayTypeCreateManyStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DutyDayTypeWhereUniqueInputSchema), z.lazy(() => DutyDayTypeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DutyDayTypeWhereUniqueInputSchema), z.lazy(() => DutyDayTypeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DutyDayTypeWhereUniqueInputSchema), z.lazy(() => DutyDayTypeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DutyDayTypeWhereUniqueInputSchema), z.lazy(() => DutyDayTypeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DutyDayTypeUpdateWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => DutyDayTypeUpdateWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DutyDayTypeUpdateManyWithWhereWithoutStaffInputSchema), z.lazy(() => DutyDayTypeUpdateManyWithWhereWithoutStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DutyDayTypeScalarWhereInputSchema), z.lazy(() => DutyDayTypeScalarWhereInputSchema).array() ]).optional(),
});

export default DutyDayTypeUpdateManyWithoutStaffNestedInputSchema;
