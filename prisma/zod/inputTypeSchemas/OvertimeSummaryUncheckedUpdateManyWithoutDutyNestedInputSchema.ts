import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryCreateWithoutDutyInputSchema } from './OvertimeSummaryCreateWithoutDutyInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutDutyInputSchema } from './OvertimeSummaryUncheckedCreateWithoutDutyInputSchema';
import { OvertimeSummaryCreateOrConnectWithoutDutyInputSchema } from './OvertimeSummaryCreateOrConnectWithoutDutyInputSchema';
import { OvertimeSummaryUpsertWithWhereUniqueWithoutDutyInputSchema } from './OvertimeSummaryUpsertWithWhereUniqueWithoutDutyInputSchema';
import { OvertimeSummaryCreateManyDutyInputEnvelopeSchema } from './OvertimeSummaryCreateManyDutyInputEnvelopeSchema';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';
import { OvertimeSummaryUpdateWithWhereUniqueWithoutDutyInputSchema } from './OvertimeSummaryUpdateWithWhereUniqueWithoutDutyInputSchema';
import { OvertimeSummaryUpdateManyWithWhereWithoutDutyInputSchema } from './OvertimeSummaryUpdateManyWithWhereWithoutDutyInputSchema';
import { OvertimeSummaryScalarWhereInputSchema } from './OvertimeSummaryScalarWhereInputSchema';

export const OvertimeSummaryUncheckedUpdateManyWithoutDutyNestedInputSchema: z.ZodType<Prisma.OvertimeSummaryUncheckedUpdateManyWithoutDutyNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryCreateWithoutDutyInputSchema).array(), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSummaryCreateOrConnectWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OvertimeSummaryUpsertWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryUpsertWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSummaryCreateManyDutyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OvertimeSummaryWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OvertimeSummaryWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OvertimeSummaryWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OvertimeSummaryWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OvertimeSummaryUpdateWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryUpdateWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OvertimeSummaryUpdateManyWithWhereWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryUpdateManyWithWhereWithoutDutyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OvertimeSummaryScalarWhereInputSchema), z.lazy(() => OvertimeSummaryScalarWhereInputSchema).array() ]).optional(),
});

export default OvertimeSummaryUncheckedUpdateManyWithoutDutyNestedInputSchema;
