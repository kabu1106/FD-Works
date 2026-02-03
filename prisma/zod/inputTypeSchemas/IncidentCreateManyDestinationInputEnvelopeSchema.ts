import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateManyDestinationInputSchema } from './IncidentCreateManyDestinationInputSchema';

export const IncidentCreateManyDestinationInputEnvelopeSchema: z.ZodType<Prisma.IncidentCreateManyDestinationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentCreateManyDestinationInputSchema), z.lazy(() => IncidentCreateManyDestinationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentCreateManyDestinationInputEnvelopeSchema;
