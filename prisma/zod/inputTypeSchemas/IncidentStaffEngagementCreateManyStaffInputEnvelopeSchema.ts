import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementCreateManyStaffInputSchema } from './IncidentStaffEngagementCreateManyStaffInputSchema';

export const IncidentStaffEngagementCreateManyStaffInputEnvelopeSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateManyStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentStaffEngagementCreateManyStaffInputSchema), z.lazy(() => IncidentStaffEngagementCreateManyStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentStaffEngagementCreateManyStaffInputEnvelopeSchema;
