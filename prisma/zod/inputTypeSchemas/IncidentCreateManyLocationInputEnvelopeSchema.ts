import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateManyLocationInputSchema } from './IncidentCreateManyLocationInputSchema';

export const IncidentCreateManyLocationInputEnvelopeSchema: z.ZodType<Prisma.IncidentCreateManyLocationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentCreateManyLocationInputSchema), z.lazy(() => IncidentCreateManyLocationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentCreateManyLocationInputEnvelopeSchema;
