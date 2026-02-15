import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementCreateManyIncidentInputSchema } from './IncidentStaffEngagementCreateManyIncidentInputSchema';

export const IncidentStaffEngagementCreateManyIncidentInputEnvelopeSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateManyIncidentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentStaffEngagementCreateManyIncidentInputSchema), z.lazy(() => IncidentStaffEngagementCreateManyIncidentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentStaffEngagementCreateManyIncidentInputEnvelopeSchema;
