import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryCreateWithoutStaffInputSchema } from './OvertimeSummaryCreateWithoutStaffInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutStaffInputSchema } from './OvertimeSummaryUncheckedCreateWithoutStaffInputSchema';
import { OvertimeSummaryCreateOrConnectWithoutStaffInputSchema } from './OvertimeSummaryCreateOrConnectWithoutStaffInputSchema';
import { OvertimeSummaryUpsertWithWhereUniqueWithoutStaffInputSchema } from './OvertimeSummaryUpsertWithWhereUniqueWithoutStaffInputSchema';
import { OvertimeSummaryCreateManyStaffInputEnvelopeSchema } from './OvertimeSummaryCreateManyStaffInputEnvelopeSchema';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';
import { OvertimeSummaryUpdateWithWhereUniqueWithoutStaffInputSchema } from './OvertimeSummaryUpdateWithWhereUniqueWithoutStaffInputSchema';
import { OvertimeSummaryUpdateManyWithWhereWithoutStaffInputSchema } from './OvertimeSummaryUpdateManyWithWhereWithoutStaffInputSchema';
import { OvertimeSummaryScalarWhereInputSchema } from './OvertimeSummaryScalarWhereInputSchema';

export const OvertimeSummaryUpdateManyWithoutStaffNestedInputSchema: z.ZodType<Prisma.OvertimeSummaryUpdateManyWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryCreateWithoutStaffInputSchema).array(), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSummaryCreateOrConnectWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OvertimeSummaryUpsertWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryUpsertWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSummaryCreateManyStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OvertimeSummaryWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OvertimeSummaryWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OvertimeSummaryWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OvertimeSummaryWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OvertimeSummaryUpdateWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryUpdateWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OvertimeSummaryUpdateManyWithWhereWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryUpdateManyWithWhereWithoutStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OvertimeSummaryScalarWhereInputSchema), z.lazy(() => OvertimeSummaryScalarWhereInputSchema).array() ]).optional(),
});

export default OvertimeSummaryUpdateManyWithoutStaffNestedInputSchema;
