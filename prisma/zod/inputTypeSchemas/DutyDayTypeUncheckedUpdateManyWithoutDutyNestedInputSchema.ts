import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeCreateWithoutDutyInputSchema } from './DutyDayTypeCreateWithoutDutyInputSchema';
import { DutyDayTypeUncheckedCreateWithoutDutyInputSchema } from './DutyDayTypeUncheckedCreateWithoutDutyInputSchema';
import { DutyDayTypeCreateOrConnectWithoutDutyInputSchema } from './DutyDayTypeCreateOrConnectWithoutDutyInputSchema';
import { DutyDayTypeUpsertWithWhereUniqueWithoutDutyInputSchema } from './DutyDayTypeUpsertWithWhereUniqueWithoutDutyInputSchema';
import { DutyDayTypeCreateManyDutyInputEnvelopeSchema } from './DutyDayTypeCreateManyDutyInputEnvelopeSchema';
import { DutyDayTypeWhereUniqueInputSchema } from './DutyDayTypeWhereUniqueInputSchema';
import { DutyDayTypeUpdateWithWhereUniqueWithoutDutyInputSchema } from './DutyDayTypeUpdateWithWhereUniqueWithoutDutyInputSchema';
import { DutyDayTypeUpdateManyWithWhereWithoutDutyInputSchema } from './DutyDayTypeUpdateManyWithWhereWithoutDutyInputSchema';
import { DutyDayTypeScalarWhereInputSchema } from './DutyDayTypeScalarWhereInputSchema';

export const DutyDayTypeUncheckedUpdateManyWithoutDutyNestedInputSchema: z.ZodType<Prisma.DutyDayTypeUncheckedUpdateManyWithoutDutyNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyDayTypeCreateWithoutDutyInputSchema), z.lazy(() => DutyDayTypeCreateWithoutDutyInputSchema).array(), z.lazy(() => DutyDayTypeUncheckedCreateWithoutDutyInputSchema), z.lazy(() => DutyDayTypeUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DutyDayTypeCreateOrConnectWithoutDutyInputSchema), z.lazy(() => DutyDayTypeCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DutyDayTypeUpsertWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => DutyDayTypeUpsertWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DutyDayTypeCreateManyDutyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DutyDayTypeWhereUniqueInputSchema), z.lazy(() => DutyDayTypeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DutyDayTypeWhereUniqueInputSchema), z.lazy(() => DutyDayTypeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DutyDayTypeWhereUniqueInputSchema), z.lazy(() => DutyDayTypeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DutyDayTypeWhereUniqueInputSchema), z.lazy(() => DutyDayTypeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DutyDayTypeUpdateWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => DutyDayTypeUpdateWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DutyDayTypeUpdateManyWithWhereWithoutDutyInputSchema), z.lazy(() => DutyDayTypeUpdateManyWithWhereWithoutDutyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DutyDayTypeScalarWhereInputSchema), z.lazy(() => DutyDayTypeScalarWhereInputSchema).array() ]).optional(),
});

export default DutyDayTypeUncheckedUpdateManyWithoutDutyNestedInputSchema;
