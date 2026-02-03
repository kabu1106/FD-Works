import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateManyStaffInputSchema } from './IncidentStaffCreateManyStaffInputSchema';

export const IncidentStaffCreateManyStaffInputEnvelopeSchema: z.ZodType<Prisma.IncidentStaffCreateManyStaffInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentStaffCreateManyStaffInputSchema), z.lazy(() => IncidentStaffCreateManyStaffInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentStaffCreateManyStaffInputEnvelopeSchema;
