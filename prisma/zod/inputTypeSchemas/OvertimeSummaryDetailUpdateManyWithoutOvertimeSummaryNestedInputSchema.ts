import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailUpsertWithWhereUniqueWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUpsertWithWhereUniqueWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailCreateManyOvertimeSummaryInputEnvelopeSchema } from './OvertimeSummaryDetailCreateManyOvertimeSummaryInputEnvelopeSchema';
import { OvertimeSummaryDetailWhereUniqueInputSchema } from './OvertimeSummaryDetailWhereUniqueInputSchema';
import { OvertimeSummaryDetailUpdateWithWhereUniqueWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUpdateWithWhereUniqueWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailUpdateManyWithWhereWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUpdateManyWithWhereWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailScalarWhereInputSchema } from './OvertimeSummaryDetailScalarWhereInputSchema';

export const OvertimeSummaryDetailUpdateManyWithoutOvertimeSummaryNestedInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpdateManyWithoutOvertimeSummaryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema).array(), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OvertimeSummaryDetailUpsertWithWhereUniqueWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailUpsertWithWhereUniqueWithoutOvertimeSummaryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSummaryDetailCreateManyOvertimeSummaryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OvertimeSummaryDetailUpdateWithWhereUniqueWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailUpdateWithWhereUniqueWithoutOvertimeSummaryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OvertimeSummaryDetailUpdateManyWithWhereWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailUpdateManyWithWhereWithoutOvertimeSummaryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema), z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema).array() ]).optional(),
});

export default OvertimeSummaryDetailUpdateManyWithoutOvertimeSummaryNestedInputSchema;
