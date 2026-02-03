import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateManyCategoryInputSchema } from './IncidentCreateManyCategoryInputSchema';

export const IncidentCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.IncidentCreateManyCategoryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentCreateManyCategoryInputSchema), z.lazy(() => IncidentCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentCreateManyCategoryInputEnvelopeSchema;
