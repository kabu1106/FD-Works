import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeCreateManyCategoryInputSchema } from './IncidentTypeCreateManyCategoryInputSchema';

export const IncidentTypeCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.IncidentTypeCreateManyCategoryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentTypeCreateManyCategoryInputSchema), z.lazy(() => IncidentTypeCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentTypeCreateManyCategoryInputEnvelopeSchema;
