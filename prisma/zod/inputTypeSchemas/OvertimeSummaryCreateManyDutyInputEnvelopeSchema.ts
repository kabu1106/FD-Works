import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryCreateManyDutyInputSchema } from './OvertimeSummaryCreateManyDutyInputSchema';

export const OvertimeSummaryCreateManyDutyInputEnvelopeSchema: z.ZodType<Prisma.OvertimeSummaryCreateManyDutyInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OvertimeSummaryCreateManyDutyInputSchema), z.lazy(() => OvertimeSummaryCreateManyDutyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OvertimeSummaryCreateManyDutyInputEnvelopeSchema;
