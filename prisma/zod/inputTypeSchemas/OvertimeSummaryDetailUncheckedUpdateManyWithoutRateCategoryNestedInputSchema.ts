import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailUpsertWithWhereUniqueWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUpsertWithWhereUniqueWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailCreateManyRateCategoryInputEnvelopeSchema } from './OvertimeSummaryDetailCreateManyRateCategoryInputEnvelopeSchema';
import { OvertimeSummaryDetailWhereUniqueInputSchema } from './OvertimeSummaryDetailWhereUniqueInputSchema';
import { OvertimeSummaryDetailUpdateWithWhereUniqueWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUpdateWithWhereUniqueWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailUpdateManyWithWhereWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUpdateManyWithWhereWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailScalarWhereInputSchema } from './OvertimeSummaryDetailScalarWhereInputSchema';

export const OvertimeSummaryDetailUncheckedUpdateManyWithoutRateCategoryNestedInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUncheckedUpdateManyWithoutRateCategoryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema).array(), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OvertimeSummaryDetailUpsertWithWhereUniqueWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailUpsertWithWhereUniqueWithoutRateCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSummaryDetailCreateManyRateCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OvertimeSummaryDetailUpdateWithWhereUniqueWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailUpdateWithWhereUniqueWithoutRateCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OvertimeSummaryDetailUpdateManyWithWhereWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailUpdateManyWithWhereWithoutRateCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema), z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema).array() ]).optional(),
});

export default OvertimeSummaryDetailUncheckedUpdateManyWithoutRateCategoryNestedInputSchema;
