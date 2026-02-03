import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryCreateManyIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateManyIncidentStaffInputSchema';

export const IncidentAllowanceSummaryCreateManyIncidentStaffInputEnvelopeSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateManyIncidentStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateManyIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryCreateManyIncidentStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentAllowanceSummaryCreateManyIncidentStaffInputEnvelopeSchema;
