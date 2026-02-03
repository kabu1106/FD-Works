import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailCreateManyOvertimeSummaryInputSchema } from './OvertimeSummaryDetailCreateManyOvertimeSummaryInputSchema';

export const OvertimeSummaryDetailCreateManyOvertimeSummaryInputEnvelopeSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateManyOvertimeSummaryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OvertimeSummaryDetailCreateManyOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailCreateManyOvertimeSummaryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OvertimeSummaryDetailCreateManyOvertimeSummaryInputEnvelopeSchema;
