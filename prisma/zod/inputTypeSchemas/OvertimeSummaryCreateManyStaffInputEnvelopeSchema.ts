import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryCreateManyStaffInputSchema } from './OvertimeSummaryCreateManyStaffInputSchema';

export const OvertimeSummaryCreateManyStaffInputEnvelopeSchema: z.ZodType<Prisma.OvertimeSummaryCreateManyStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OvertimeSummaryCreateManyStaffInputSchema), z.lazy(() => OvertimeSummaryCreateManyStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OvertimeSummaryCreateManyStaffInputEnvelopeSchema;
