import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInputSchema';
import { OvertimeSummaryDetailCreateManyRateCategoryInputEnvelopeSchema } from './OvertimeSummaryDetailCreateManyRateCategoryInputEnvelopeSchema';
import { OvertimeSummaryDetailWhereUniqueInputSchema } from './OvertimeSummaryDetailWhereUniqueInputSchema';

export const OvertimeSummaryDetailCreateNestedManyWithoutRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateNestedManyWithoutRateCategoryInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema).array(), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailCreateOrConnectWithoutRateCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSummaryDetailCreateManyRateCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema).array() ]).optional(),
});

export default OvertimeSummaryDetailCreateNestedManyWithoutRateCategoryInputSchema;
