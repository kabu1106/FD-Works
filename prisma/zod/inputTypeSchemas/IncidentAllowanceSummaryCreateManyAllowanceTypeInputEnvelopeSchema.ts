import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryCreateManyAllowanceTypeInputSchema } from './IncidentAllowanceSummaryCreateManyAllowanceTypeInputSchema';

export const IncidentAllowanceSummaryCreateManyAllowanceTypeInputEnvelopeSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateManyAllowanceTypeInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateManyAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryCreateManyAllowanceTypeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentAllowanceSummaryCreateManyAllowanceTypeInputEnvelopeSchema;
