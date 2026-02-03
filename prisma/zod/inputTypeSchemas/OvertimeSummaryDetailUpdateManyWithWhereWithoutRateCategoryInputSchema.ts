import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailScalarWhereInputSchema } from './OvertimeSummaryDetailScalarWhereInputSchema';
import { OvertimeSummaryDetailUpdateManyMutationInputSchema } from './OvertimeSummaryDetailUpdateManyMutationInputSchema';
import { OvertimeSummaryDetailUncheckedUpdateManyWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUncheckedUpdateManyWithoutRateCategoryInputSchema';

export const OvertimeSummaryDetailUpdateManyWithWhereWithoutRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpdateManyWithWhereWithoutRateCategoryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryDetailScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OvertimeSummaryDetailUpdateManyMutationInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedUpdateManyWithoutRateCategoryInputSchema) ]),
});

export default OvertimeSummaryDetailUpdateManyWithWhereWithoutRateCategoryInputSchema;
