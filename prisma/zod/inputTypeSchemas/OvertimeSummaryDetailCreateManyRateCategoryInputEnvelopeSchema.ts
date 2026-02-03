import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailCreateManyRateCategoryInputSchema } from './OvertimeSummaryDetailCreateManyRateCategoryInputSchema';

export const OvertimeSummaryDetailCreateManyRateCategoryInputEnvelopeSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateManyRateCategoryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OvertimeSummaryDetailCreateManyRateCategoryInputSchema), z.lazy(() => OvertimeSummaryDetailCreateManyRateCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OvertimeSummaryDetailCreateManyRateCategoryInputEnvelopeSchema;
