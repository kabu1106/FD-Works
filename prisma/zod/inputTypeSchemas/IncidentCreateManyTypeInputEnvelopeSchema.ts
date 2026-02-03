import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateManyTypeInputSchema } from './IncidentCreateManyTypeInputSchema';

export const IncidentCreateManyTypeInputEnvelopeSchema: z.ZodType<Prisma.IncidentCreateManyTypeInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => IncidentCreateManyTypeInputSchema), z.lazy(() => IncidentCreateManyTypeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default IncidentCreateManyTypeInputEnvelopeSchema;
